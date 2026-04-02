import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '一',
    numRoman: '01',
    title: 'Paste Any YouTube URL',
    desc: 'Drop in any YouTube video link — tutorials, podcasts, documentaries, lectures, interviews. Any length.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="#E8836B" opacity="0.15"/>
        <rect x="10" y="16" width="28" height="18" rx="5" fill="#E8836B"/>
        <polygon points="20,21 20,30 30,25.5" fill="white"/>
        <path d="M18 38 L24 32 L30 38" fill="none" stroke="#E8836B" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="32" x2="24" y2="40" stroke="#E8836B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '二',
    numRoman: '02',
    title: 'The AI Samurai Studies It',
    desc: 'Our model transcribes, analyzes structure, identifies key moments, and extracts the essence — like a blade finding the joint.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="#3D4F6B" opacity="0.12"/>
        <circle cx="24" cy="24" r="10" fill="none" stroke="#3D4F6B" strokeWidth="2"/>
        <circle cx="24" cy="24" r="3" fill="#3D4F6B"/>
        <path d="M24 10 L24 14" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34 L24 38" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 24 L14 24" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 24 L38 24" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.1 14.1 L16.9 16.9" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M31.1 31.1 L33.9 33.9" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.1 33.9 L16.9 31.1" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M31.1 16.9 L33.9 14.1" stroke="#3D4F6B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '三',
    numRoman: '03',
    title: 'Receive Your Summary',
    desc: 'Get a clean, structured summary with timestamps, key insights, quotes, and action items — ready to copy, share, or export.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="#7A8C6E" opacity="0.15"/>
        <rect x="11" y="12" width="26" height="30" rx="4" fill="none" stroke="#7A8C6E" strokeWidth="2"/>
        <line x1="17" y1="20" x2="31" y2="20" stroke="#7A8C6E" strokeWidth="2" strokeLinecap="round"/>
        <line x1="17" y1="25" x2="31" y2="25" stroke="#7A8C6E" strokeWidth="2" strokeLinecap="round"/>
        <line x1="17" y1="30" x2="25" y2="30" stroke="#7A8C6E" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="34" r="6" fill="#7A8C6E"/>
        <path d="M31.5 34 L33.2 35.8 L36.5 32.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Way of the Blade</span>
          <h2 className={styles.title}>Three Cuts.<br/>Complete Clarity.</h2>
          <p className={styles.subtitle}>A samurai doesn't swing twice. Neither does our AI.</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.stepNum}>
                <span className={styles.kanji}>{step.num}</span>
                <span className={styles.roman}>{step.numRoman}</span>
              </div>
              <div className={styles.iconWrap}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className={styles.connector}>
                  <svg viewBox="0 0 120 24" fill="none">
                    <path d="M0 12 L105 12" stroke="#D4C5A9" strokeWidth="1.5" strokeDasharray="4 3"/>
                    <path d="M108 6 L118 12 L108 18" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
