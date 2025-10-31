import React from 'react';
import '@/styles/CentenerayLoader.css';
import RssFlagSVG from '@/components/CentenaryLoader/rss-flag.svg';
import ManWithShankhSVG from '@/components/CentenaryLoader/man-with-shankh.svg';

const CentenaryLoader: React.FC<{ showOffline?: boolean }> = ({ showOffline }) => (
  <div className="loader-container">
    <div className="animation-stage">
      {/* Sun and baseline */}
      <svg className="sun-horizon-bg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {/* Chrome baseline */}
        <rect className="chrome-base" x="50" y="240" width="300" height="20" rx="10" fill="#FFB300" />
        {/* Semi-circular sun (only top half visible) */}
        <path className="rising-sun" d="M120,240 A80,80 0 0,1 280,240" fill="#FF8F00" />
      </svg>
      <div className="flag-wrapper">
        <img src={RssFlagSVG} className="rss-flag" alt="RSS Flag" />
      </div>
      {/* Man with Shankh Animation */}
      <div className="man-shankh-wrapper">
        <img src={ManWithShankhSVG} className="man-with-shankh" alt="Man with Shankh" />
      </div>
      {/* Text */}
      <div className="centenary-text">&nbsp;RSS<br />@100</div>
      {showOffline && (
        <div style={{
          position: 'absolute',
          left: '50%',
          bottom: '-60px',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '18px 32px',
          borderRadius: 18,
          fontWeight: 600,
          fontSize: 18,
          zIndex: 100,
          minWidth: 220,
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          You are offline
        </div>
      )}
    </div>
  </div>
);

export default CentenaryLoader;