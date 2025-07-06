import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { i18n } = useTranslation()
  return (
    <nav className="p-4 bg-primary text-white flex justify-between">
      <span className="font-bold">Digital Karyalay</span>
      <div className="space-x-2">
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("mr")}>MR</button>
      </div>
    </nav>
  )
}
