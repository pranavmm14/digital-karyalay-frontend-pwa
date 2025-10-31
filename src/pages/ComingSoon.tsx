import '@/styles/comingSoon.css'
import { useNavigate } from 'react-router-dom'

export const ComingSoon = () => {
  const navigate = useNavigate()
  const now = new Date()
  const future = new Date(now.getFullYear(), now.getMonth() + 2, 1)
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const monthLabel = monthNames[future.getMonth()]

  return (
    <div className="coming-soon-root">
      <main className="coming-stage professional">
        <section className="cs-content">
          <h1 className="cs-title">This page is under construction</h1>
          <p className="cs-subtitle">We're polishing this feature to make it fast and reliable. Check back soon.</p>

          <div className="cs-actions">
            <button className="cs-button" onClick={() => navigate('/')}>Back to dashboard</button>
            <button className="cs-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Stay on this page</button>
          </div>
        </section>

        <aside className="cs-illustration" aria-hidden>
          {/* Illustration: calendar + gear + cone to indicate scheduling / tooling under construction */}
          <svg width="max-content" height="max-content" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Under construction illustration">
            <defs>
              <linearGradient id="accent" x1="0" x2="1">
                <stop offset="0%" stopColor="#ff9f43" />
                <stop offset="100%" stopColor="#ffd580" />
              </linearGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#ffd580" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* calendar */}
            <g transform="translate(96,18)" filter="url(#soft)">
              <rect x="0" y="12" width="160" height="120" rx="10" fill="#fff" stroke="#e6edf3" />
              <rect x="0" y="0" width="160" height="40" rx="8" fill="url(#accent)" />
              <rect x="12" y="54" width="36" height="24" rx="3" fill="#fff2d2" />
              <rect x="54" y="54" width="36" height="24" rx="3" fill="#fff2d2" />
              <rect x="96" y="54" width="36" height="24" rx="3" fill="#fff2d2" />
              <rect x="12" y="85" width="36" height="24" rx="3" fill="#f8fafc" />
              <rect x="54" y="85" width="36" height="24" rx="3" fill="#f8fafc" />
              <rect x="96" y="85" width="36" height="24" rx="3" fill="#f8fafc" />
              <text x="16" y="25" fontSize="16" fill="#453000ff" fontWeight="700">{monthLabel}</text>
            </g>

            {/* gear: placed on an orbit group so it can revolve around the calendar center while spinning on its axis */}
            {/* calendar center is at approx (92,78) given calendar group translate(12,18) and size 160x120 */}
            <g className="gear-orbit" transform="translate(210,36)">
              {/* rotate this wrapper to make the gear orbit the calendar center; change the translate(x,0) below to set orbit radius */}
              <g className="gear-orbit-rot">
                {/* place gear at radius 48 (translate(48,0)). Adjust this value to change orbit radius. */}
                <g transform="translate(48,0) scale(1.2)">
                  <g className="cs-gear" transform="translate(0,0)" fill="#ffb347" stroke="#e08f2e" strokeWidth="2">
                    {/* gear made of a central circle plus 8 teeth (rects rotated) so it's visually symmetric and spins about its center */}
                    <circle cx="0" cy="0" r="10" fill="#ffb347" />
                    <g>
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(45)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(90)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(135)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(180)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(225)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(270)" />
                      <rect x="-2.5" y="-22" width="5" height="12" rx="1" transform="rotate(315)" />
                    </g>
                    <circle cx="0" cy="0" r="5" fill="#fff2d2" />
                  </g>
                </g>
              </g>
            </g>

            {/* small cone/marker - inverted and partially overlapping the right side of the calendar (~40-50% overlap) */}
            {/* calendar right edge is at x ~= 172 (12 + 160). We position cone so about half of it overlaps that edge. */}
            <g transform="translate(0,145) scale(3,-2.7)">
              <path d="M6 0 L18 0 L12 28 Z" fill="#ff9f43" stroke="#e37b2b" strokeWidth="1" />
              <rect x="8" y="8" width="8" height="5" rx="1" fill="#fff2d2" opacity="0.9" />
            </g>
          </svg>
        </aside>
      </main>
    </div>
  )
}

export default ComingSoon
