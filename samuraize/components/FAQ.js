'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What types of YouTube videos can Samuraize handle?',
    a: 'Any publicly available YouTube video — lectures, tutorials, podcasts, documentaries, interviews, news, and more. As long as it\'s publicly accessible, Samuraize can process it. Private or age-restricted videos require additional permissions.',
  },
  {
    q: 'How accurate are the summaries?',
    a: 'Highly accurate for clearly spoken content. Our AI uses advanced transcription and semantic analysis. For heavily accented or technical content, accuracy may vary slightly. We always include timestamps so you can verify key points.',
  },
  {
    q: 'How long does it take to summarize a video?',
    a: 'Most videos under 30 minutes are summarized in under 30 seconds. Longer videos (1-3 hours) may take 1-2 minutes. Pro users get priority processing queues.',
  },
  {
    q: 'Can I summarize videos in other languages?',
    a: 'Yes! We support transcription and summarization in 40+ languages. You can also request the output summary in a different language than the original video.',
  },
  {
    q: 'What\'s the clip generation feature on the roadmap?',
    a: 'Phase IV will allow you to auto-extract short video clips from long content — funny interview moments, soccer goals, key product demo segments. You\'ll be able to download them in 9:16 (vertical) or 16:9 format, with AI-generated captions.',
  },
  {
    q: 'Is there an API for developers?',
    a: 'Yes, API access is included in the Shogun plan. You can integrate Samuraize summaries directly into your apps, CMS, or automation workflows. Documentation will be available at launch.',
  },
  {
    q: 'Does Samuraize store my video data?',
    a: 'We do not download or permanently store video content. We process the audio stream, generate the transcript and summary, and store only the summary output — never the raw video or audio.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Absolutely. Cancel anytime from your account settings. No questions asked. You\'ll retain access until the end of your billing period.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>問 — Questions</span>
          <h2 className={styles.title}>Everything You Need to Know</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              key={i}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>
                  <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                    <path d="M3 6 L8 11 L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.still}>
          <p>Still have questions?</p>
          <a href="mailto:hello@samuraize.ai" className={styles.contact}>
            Email us at hello@samuraize.ai →
          </a>
        </div>
      </div>
    </section>
  )
}
