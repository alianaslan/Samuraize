import styles from './Roadmap.module.css'

const phases = [
  {
    phase: 'Phase I',
    kanji: '始',
    title: 'The First Blade',
    status: 'Live',
    statusColor: '#7A8C6E',
    quarter: 'Q2 2025',
    items: [
      'Single YouTube video summarization',
      'Timestamped key moments',
      'Structured note export (Markdown, PDF)',
      'Multi-language summary output',
      'Share via link',
    ],
    icon: '🎌',
  },
  {
    phase: 'Phase II',
    kanji: '道',
    title: 'The Channel Samurai',
    status: 'Coming Soon',
    statusColor: '#C9A84C',
    quarter: 'Q3 2025',
    items: [
      'Full YouTube channel digests',
      'Weekly AI newsletter from any channel',
      'Playlist batch summarization',
      'Creator analytics — what resonates',
      'Browser extension for 1-click summarize',
    ],
    icon: '📺',
  },
  {
    phase: 'Phase III',
    kanji: '音',
    title: 'The Podcast Dojo',
    status: 'Roadmap',
    statusColor: '#3D4F6B',
    quarter: 'Q4 2025',
    items: [
      'Podcast episode summarization (via YouTube)',
      'Speaker diarization & identification',
      'Guest profile & episode chapter tags',
      'Searchable podcast archive',
      'Export to Spotify chapters format',
    ],
    icon: '🎙️',
  },
  {
    phase: 'Phase IV',
    kanji: '剣',
    title: 'The Clip Master',
    status: 'Roadmap',
    statusColor: '#C17B5C',
    quarter: 'Q1 2026',
    items: [
      'AI-generated video clips with captions',
      'Auto-detect funny moments in interviews',
      'Sports highlight extraction (goals, plays)',
      'Short-form social clips (9:16 format)',
      'Multi-clip compilation generator',
    ],
    icon: '🎬',
  },
]

export default function Roadmap() {
  return (
    <section className={styles.section} id="roadmap">
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>道 — The Path</span>
          <h2 className={styles.title}>The Samurai's Roadmap</h2>
          <p className={styles.subtitle}>From single video summaries to full-channel intelligence to AI video clips — this is where we're headed.</p>
        </div>

        <div className={styles.timeline}>
          {/* Vertical line */}
          <div className={styles.timelineLine}></div>

          {phases.map((p, i) => (
            <div className={`${styles.phaseRow} ${i % 2 === 0 ? styles.left : styles.right}`} key={i}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.phaseLabel}>
                    <span className={styles.phaseTag}>{p.phase}</span>
                    <span className={styles.quarter}>{p.quarter}</span>
                  </div>
                  <span className={styles.status} style={{ background: p.statusColor + '22', color: p.statusColor, borderColor: p.statusColor + '44' }}>
                    {p.status}
                  </span>
                </div>

                <div className={styles.cardTitleRow}>
                  <span className={styles.cardIcon}>{p.icon}</span>
                  <div>
                    <div className={styles.kanjiLabel}>{p.kanji}</div>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                  </div>
                </div>

                <ul className={styles.items}>
                  {p.items.map((item, j) => (
                    <li key={j} className={styles.item}>
                      <span className={styles.itemDot} style={{ background: p.statusColor }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline node */}
              <div className={styles.node} style={{ background: p.statusColor }}>
                <div className={styles.nodeInner}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Have a feature idea? We build based on community feedback.</p>
          <a href="mailto:hello@samuraize.ai" className={styles.footerLink}>Suggest a feature →</a>
        </div>
      </div>
    </section>
  )
}
