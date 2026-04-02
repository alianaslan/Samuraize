import styles from './Features.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Instant Summaries',
    desc: 'Get the full picture of any video in under 30 seconds. AI-powered transcription and synthesis.',
    tag: 'Core',
    color: '#E8836B',
  },
  {
    icon: '🎯',
    title: 'Key Moment Extraction',
    desc: 'Pinpoint the most important timestamps, quotes, and insights automatically. No more scrubbing.',
    tag: 'Core',
    color: '#C9A84C',
  },
  {
    icon: '📋',
    title: 'Structured Notes',
    desc: 'Summaries organized with headers, bullets, and action items. Export to Notion, Docs, or Markdown.',
    tag: 'Core',
    color: '#7A8C6E',
  },
  {
    icon: '🎙️',
    title: 'Podcast Summarizer',
    desc: 'Works on podcast YouTube uploads too. Speaker identification, topic chapters, key takeaways.',
    tag: 'Coming Soon',
    color: '#3D4F6B',
  },
  {
    icon: '🎬',
    title: 'Smart Clip Generator',
    desc: 'Auto-extract the funniest, most interesting, or most important clips from any long video.',
    tag: 'Roadmap',
    color: '#C17B5C',
  },
  {
    icon: '📺',
    title: 'Channel Digest',
    desc: 'Subscribe to any YouTube channel and get weekly AI summaries of their best content.',
    tag: 'Roadmap',
    color: '#B5C4A8',
  },
  {
    icon: '🌐',
    title: 'Multi-language',
    desc: 'Summarize videos in any language. Output in your preferred language. 40+ supported.',
    tag: 'Core',
    color: '#E8C4B0',
  },
  {
    icon: '🔗',
    title: 'Share & Embed',
    desc: 'Share your summary with a link, or embed the summary card anywhere on the web.',
    tag: 'Core',
    color: '#D4C5A9',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>精 — Precision</span>
          <h2 className={styles.title}>Every Tool a Samurai Needs</h2>
          <p className={styles.subtitle}>Built for students, researchers, creators, and professionals who don't have time to waste.</p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{f.icon}</span>
                <span className={`${styles.tag} ${f.tag === 'Coming Soon' ? styles.tagSoon : f.tag === 'Roadmap' ? styles.tagRoad : styles.tagCore}`}>
                  {f.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardLine} style={{ background: f.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
