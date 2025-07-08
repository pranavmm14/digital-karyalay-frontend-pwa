// src/context/AuthContext.tsx
import type { ReactNode } from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth, provider } from '@/auth/firebase'

interface User {
  name: string
  email: string
  photoURL: string
  uid: string
}

interface AuthContextType {
  user: User | null
  loginWithGoogle: () => Promise<void>
  loginWithEmail: (email: string, password: string) => Promise<void>
  registerWithEmail: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // console.log("Auth state changed:", firebaseUser ? "User logged in" : "User logged out") // Debug log
      
      if (firebaseUser) {
        const newUser: User = {
          name: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          photoURL: firebaseUser.photoURL || '',
          uid: firebaseUser.uid,
        }
        // console.log("Setting user:", newUser) // Debug log
        setUser(newUser)
        localStorage.setItem('uid', newUser.uid)
      } else {
        setUser(null)
        localStorage.removeItem('uid')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const loginWithGoogle = async () => {
    // console.log("Attempting Google login") // Debug log
    await signInWithPopup(auth, provider)
    // user is handled by onAuthStateChanged
  }

  const loginWithEmail = async (email: string, password: string) => {
    console.log("Attempting email login") // Debug log
    await signInWithEmailAndPassword(auth, email, password)
    // user is handled by onAuthStateChanged
  }

  const registerWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
    // user is handled by onAuthStateChanged
  }

  const logout = async () => {
    // console.log("Logging out") // Debug log
    await signOut(auth)
    setUser(null)
    localStorage.removeItem('uid')
  }

  // console.log("AuthProvider rendering with user:", user, "loading:", loading) // Debug log

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}