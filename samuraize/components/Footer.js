import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top CTA strip */}
        <div className={styles.cta}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>Ready to Samuraize?</h2>
            <p className={styles.ctaSub}>Join 2,400+ early adopters. Free forever plan available.</p>
          </div>
          <a href="#hero" className={styles.ctaBtn}>Start Free →</a>
        </div>

        <div className={styles.divider}></div>

        {/* Main footer grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="12" width="18" height="13" rx="2" fill="rgba(245,240,232,0.12)" stroke="rgba(212,197,169,0.3)" strokeWidth="1.2"/>
                <line x1="4" y1="16" x2="22" y2="16" stroke="rgba(212,197,169,0.2)" strokeWidth="0.8"/>
                <line x1="4" y1="19" x2="22" y2="19" stroke="rgba(212,197,169,0.2)" strokeWidth="0.8"/>
                <line x1="4" y1="22" x2="16" y2="22" stroke="rgba(212,197,169,0.2)" strokeWidth="0.8"/>
                <line x1="6" y1="6" x2="28" y2="28" stroke="#C17B5C" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="28" y2="28" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                <rect x="3" y="3" width="5" height="5" rx="1" fill="#3D4F6B" transform="rotate(-45 5.5 5.5)"/>
              </svg>
              <span className={styles.logoText}>Samuraize<span className={styles.logoAi}>.ai</span></span>
            </div>
            <p className={styles.tagline}>
              Slice through any YouTube video.<br />Sharp. Instant. Precise.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className={styles.social} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/>
                </svg>
              </a>
              <a href="#" className={styles.social} aria-label="Product Hunt">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm1.604 14.4h-3.405V18H7.8V6h5.804a4.2 4.2 0 0 1 0 8.4z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Product</h4>
            <a href="#how-it-works" className={styles.link}>How It Works</a>
            <a href="#features" className={styles.link}>Features</a>
            <a href="#roadmap" className={styles.link}>Roadmap</a>
            <a href="#pricing" className={styles.link}>Pricing</a>
            <a href="#" className={styles.link}>Browser Extension</a>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Use Cases</h4>
            <a href="#" className={styles.link}>Students & Researchers</a>
            <a href="#" className={styles.link}>Content Creators</a>
            <a href="#" className={styles.link}>Podcast Listeners</a>
            <a href="#" className={styles.link}>Sports Highlights</a>
            <a href="#" className={styles.link}>Team Knowledge</a>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <a href="#" className={styles.link}>About</a>
            <a href="#" className={styles.link}>Blog</a>
            <a href="mailto:hello@samuraize.ai" className={styles.link}>Contact</a>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 Samuraize.ai — All rights reserved.</p>
          <p className={styles.made}>
            Made with 🎋 and a sharp blade
          </p>
        </div>
      </div>

      {/* Big background kanji */}
      <div className={styles.bgKanji}>侍</div>
    </footer>
  )
}
