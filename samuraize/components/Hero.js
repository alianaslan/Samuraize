'use client'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [url, setUrl] = useState('')
  const [sliced, setSliced] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSlice = () => {
    if (url.trim()) {
      setSliced(true)
      setTimeout(() => setSliced(false), 2000)
    }
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Background Japanese pattern */}
      <div className={styles.bgPattern}></div>
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>

      <div className={styles.container}>
        <div className={styles.leftCol}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Now in Early Access
          </div>

          <h1 className={styles.headline}>
            Slice Through<br />
            <span className={styles.accent}>Any Video.</span><br />
            In Seconds.
          </h1>

          <p className={styles.sub}>
            Samuraize.ai uses AI to cut through hours of YouTube content and deliver razor-sharp summaries, key clips, and insights — with the precision of a master blade.
          </p>

          {/* URL Input */}
          <div className={styles.inputGroup}>
            <div className={styles.urlInput}>
              <svg className={styles.ytIcon} viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#E8836B"/>
                <path d="M19.6 7.8a2.1 2.1 0 0 0-1.5-1.5C16.8 6 12 6 12 6s-4.8 0-6.1.3A2.1 2.1 0 0 0 4.4 7.8 22 22 0 0 0 4 12a22 22 0 0 0 .4 4.2 2.1 2.1 0 0 0 1.5 1.5C7.2 18 12 18 12 18s4.8 0 6.1-.3a2.1 2.1 0 0 0 1.5-1.5A22 22 0 0 0 20 12a22 22 0 0 0-.4-4.2z" fill="white"/>
                <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="#E8836B"/>
              </svg>
              <input
                type="text"
                placeholder="Paste a YouTube URL here..."
                value={url}
                onChange={e => setUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSlice()}
                className={styles.input}
              />
              <button onClick={handleSlice} className={`${styles.sliceBtn} ${sliced ? styles.sliced : ''}`}>
                {sliced ? '⚡ Samuraized!' : '斬 Samuraize'}
              </button>
            </div>
            <p className={styles.inputHint}>Try: youtube.com/watch?v=... — No account needed</p>
          </div>

          {/* Email Capture */}
          {!submitted ? (
            <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
              <p className={styles.emailLabel}>Get early access & 3 months free Pro:</p>
              <div className={styles.emailRow}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.emailBtn}>Join Waitlist →</button>
              </div>
            </form>
          ) : (
            <div className={styles.success}>
              <span>🎋</span> You're on the list! We'll be in touch.
            </div>
          )}

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {['#C17B5C','#7A8C6E','#3D4F6B','#C9A84C','#E8836B'].map((c, i) => (
                <div key={i} className={styles.avatar} style={{background: c, zIndex: 5-i}} />
              ))}
            </div>
            <span>Join <strong>2,400+</strong> samurais already on the waitlist</span>
          </div>
        </div>

        {/* RIGHT COL: Samurai Scene */}
        <div className={styles.rightCol}>
          <div className={styles.scene}>
            <SamuraiScene sliced={sliced} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

function SamuraiScene({ sliced }) {
  return (
    <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" className={styles.svgScene}>
      {/* Background circle */}
      <circle cx="210" cy="220" r="180" fill="#EDE7D9" opacity="0.6"/>
      <circle cx="210" cy="220" r="155" fill="none" stroke="#D4C5A9" strokeWidth="1" strokeDasharray="8 4"/>

      {/* Japanese sun */}
      <circle cx="210" cy="120" r="55" fill="#E8C4B0" opacity="0.5"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
        <line
          key={i}
          x1="210" y1="120"
          x2={210 + 75 * Math.cos((angle - 90) * Math.PI / 180)}
          y2={120 + 75 * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="#C9A84C" strokeWidth="1" opacity="0.25"
        />
      ))}

      {/* Tatami / ground */}
      <ellipse cx="210" cy="400" rx="160" ry="30" fill="#D4C5A9" opacity="0.5"/>
      <ellipse cx="210" cy="398" rx="140" ry="22" fill="#C9A84C" opacity="0.15"/>

      {/* Plate */}
      <ellipse cx="210" cy="395" rx="95" ry="18" fill="#F0E8D8" stroke="#C9A84C" strokeWidth="2"/>
      <ellipse cx="210" cy="393" rx="85" ry="13" fill="none" stroke="#D4C5A9" strokeWidth="1"/>

      {/* Sushi pieces on plate (appear after slice) */}
      {[
        { cx: 165, cy: 390, delay: '0.3s' },
        { cx: 195, cy: 386, delay: '0.45s' },
        { cx: 225, cy: 388, delay: '0.6s' },
        { cx: 255, cy: 392, delay: '0.75s' },
      ].map((s, i) => (
        <g key={i} style={{ animation: sliced ? `sushiAppear 0.5s ${s.delay} both` : 'none', opacity: sliced ? 1 : 0.15 }}>
          {/* Rice base */}
          <ellipse cx={s.cx} cy={s.cy} rx="16" ry="10" fill="#F5F0E8" stroke="#D4C5A9" strokeWidth="1"/>
          {/* Salmon topping */}
          <ellipse cx={s.cx} cy={s.cy - 3} rx="14" ry="8" fill="#E8836B" opacity="0.9"/>
          {/* YouTube logo on each sushi */}
          <rect x={s.cx - 8} y={s.cy - 7} width="16" height="10" rx="2.5" fill="#E8836B"/>
          <ellipse cx={s.cx} cy={s.cy - 2} rx="12" ry="6" fill="#E8836B"/>
          <polygon points={`${s.cx-3},${s.cy-5} ${s.cx+4},${s.cy-2} ${s.cx-3},${s.cy+1}`} fill="white"/>
          {/* Nori band */}
          <rect x={s.cx - 16} y={s.cy - 1} width="32" height="5" rx="2" fill="#2C2416" opacity="0.7"/>
        </g>
      ))}

      {/* Whole SALMON (YouTube shape) — before slice */}
      <g style={{ opacity: sliced ? 0.1 : 1, transition: 'opacity 0.3s' }}>
        {/* Salmon body — rounded rectangle like YT */}
        <rect x="120" y="255" width="180" height="110" rx="22" fill="#E8836B"/>
        {/* YouTube logo inside */}
        <rect x="135" y="268" width="150" height="84" rx="16" fill="#E8836B"/>
        {/* Play button */}
        <circle cx="210" cy="310" r="32" fill="white" opacity="0.25"/>
        <polygon points="198,296 198,324 228,310" fill="white"/>
        {/* Salmon skin texture lines */}
        <path d="M135 285 Q175 280 220 285 Q260 290 295 285" fill="none" stroke="#C96B50" strokeWidth="1.5" opacity="0.4"/>
        <path d="M130 300 Q170 295 215 300 Q258 305 300 300" fill="none" stroke="#C96B50" strokeWidth="1.5" opacity="0.4"/>
        <path d="M133 315 Q172 310 217 315 Q260 320 297 315" fill="none" stroke="#C96B50" strokeWidth="1.5" opacity="0.4"/>
        {/* Tail fin */}
        <path d="M295 285 Q320 265 330 310 Q320 355 295 335" fill="#C96B50"/>
        {/* Eye */}
        <circle cx="145" cy="305" r="8" fill="white"/>
        <circle cx="145" cy="305" r="4" fill="#2C2416"/>
      </g>

      {/* SAMURAI FIGURE */}
      <g className={styles.samurai}>
        {/* Body / Kimono */}
        <path d="M175 165 Q175 185 165 210 L180 330 L240 330 L255 210 Q245 185 245 165 Z" fill="#3D4F6B"/>
        <path d="M185 170 L215 170 L230 200 L210 215 L190 200 Z" fill="#5A6E8C" opacity="0.5"/>
        {/* Hakama lines */}
        <line x1="210" y1="220" x2="210" y2="330" stroke="#2C2416" strokeWidth="1.5" opacity="0.3"/>
        {/* Obi belt */}
        <rect x="178" y="225" width="64" height="18" rx="4" fill="#C9A84C"/>
        <rect x="200" y="225" width="20" height="18" fill="#B8942E"/>
        {/* Shoulders */}
        <rect x="158" y="170" width="28" height="14" rx="4" fill="#3D4F6B"/>
        <rect x="234" y="170" width="28" height="14" rx="4" fill="#3D4F6B"/>
        {/* Arms */}
        <path d="M163 178 L148 230 L165 232 L175 185" fill="#3D4F6B"/>
        <path d="M257 178 L272 210 L255 215 L245 185" fill="#3D4F6B"/>
        {/* Head */}
        <ellipse cx="210" cy="145" rx="30" ry="32" fill="#D4A882"/>
        {/* Kabuto helmet */}
        <path d="M180 138 Q180 105 210 100 Q240 105 240 138 Z" fill="#2C2416"/>
        <path d="M178 140 L242 140" stroke="#C9A84C" strokeWidth="3"/>
        <rect x="195" y="98" width="30" height="8" rx="2" fill="#C9A84C"/>
        {/* Face details */}
        <line x1="195" y1="145" x2="205" y2="145" stroke="#2C2416" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="215" y1="145" x2="225" y2="145" stroke="#2C2416" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M200 158 Q210 163 220 158" fill="none" stroke="#2C2416" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Scarf */}
        <path d="M182 165 Q195 175 210 172 Q225 175 238 165" fill="none" stroke="#C17B5C" strokeWidth="6" strokeLinecap="round"/>
        {/* Legs/feet */}
        <rect x="188" y="328" width="22" height="32" rx="4" fill="#2C2416"/>
        <rect x="212" y="328" width="22" height="32" rx="4" fill="#2C2416"/>
        <ellipse cx="199" cy="360" rx="14" ry="6" fill="#3D4F6B"/>
        <ellipse cx="223" cy="360" rx="14" ry="6" fill="#3D4F6B"/>
      </g>

      {/* KATANA — raised arm and sword */}
      <g
        style={{
          transformOrigin: '260px 220px',
          animation: sliced ? `slice 0.6s ease forwards` : `swing 3s ease-in-out infinite`,
        }}
      >
        {/* Arm holding sword */}
        <path d="M255 185 L280 220 L265 228 L242 195" fill="#3D4F6B"/>
        {/* Hand */}
        <ellipse cx="272" cy="222" rx="12" ry="8" fill="#D4A882" transform="rotate(-30 272 222)"/>
        {/* Tsuba (guard) */}
        <ellipse cx="290" cy="218" rx="8" ry="14" fill="#C9A84C" transform="rotate(-45 290 218)"/>
        {/* Handle */}
        <rect x="272" y="205" width="30" height="10" rx="4" fill="#2C2416" transform="rotate(-45 287 210)"/>
        {/* Blade */}
        <path d="M302 206 L390 118 L394 122 L310 215 Z" fill="url(#bladeGrad)"/>
        <path d="M302 206 L392 120" stroke="#C9A84C" strokeWidth="0.5" opacity="0.7"/>
        {/* Tip */}
        <path d="M390 118 L394 122 L388 116 Z" fill="#C9A84C"/>
        {/* Slash line (on slice) */}
        {sliced && (
          <line x1="100" y1="240" x2="340" y2="240" stroke="#C9A84C" strokeWidth="2" opacity="0.8" strokeDasharray="4 3"
            style={{ animation: 'fadeIn 0.2s ease forwards' }}
          />
        )}
        <defs>
          <linearGradient id="bladeGrad" x1="302" y1="206" x2="392" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C0C8D0"/>
            <stop offset="40%" stopColor="#F0F4F7"/>
            <stop offset="60%" stopColor="#E0E8EF"/>
            <stop offset="100%" stopColor="#A8B4BE"/>
          </linearGradient>
        </defs>
      </g>

      {/* Cherry blossom petals */}
      {[{x:80,y:80,r:6},{x:340,y:95,r:5},{x:60,y:200,r:4},{x:365,y:180,r:7},{x:95,y:320,r:5}].map((p,i) => (
        <g key={i} style={{ animation: `float ${3+i*0.5}s ease-in-out ${i*0.3}s infinite` }}>
          <circle cx={p.x} cy={p.y} r={p.r} fill="#E8C4B0" opacity="0.6"/>
          <path d={`M${p.x} ${p.y-p.r} Q${p.x+p.r} ${p.y} ${p.x} ${p.y+p.r} Q${p.x-p.r} ${p.y} ${p.x} ${p.y-p.r}`} fill="#D4A0A0" opacity="0.5"/>
        </g>
      ))}
    </svg>
  )
}
