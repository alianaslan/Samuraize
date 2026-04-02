'use client'
import { useState } from 'react'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Ronin',
    kanji: '浪',
    subtitle: 'For the wandering learner',
    price: { monthly: 0, annual: 0 },
    cta: 'Start Free',
    ctaStyle: 'outline',
    features: [
      '5 video summaries / month',
      'Basic text summary',
      'Copy & export',
      '720p max video length (20 min)',
      'Watermarked share links',
    ],
    notIncluded: [
      'Channel digests',
      'Podcast mode',
      'Clip generation',
      'Priority processing',
    ],
  },
  {
    name: 'Samurai',
    kanji: '武',
    subtitle: 'For the serious learner',
    price: { monthly: 12, annual: 9 },
    badge: 'Most Popular',
    cta: 'Start 7-Day Trial',
    ctaStyle: 'primary',
    features: [
      'Unlimited summaries',
      'Advanced structured notes',
      'Timestamp & clip extraction',
      'Any video length',
      'Multi-language output',
      'No watermarks',
      'Channel digests (5 channels)',
      'Podcast mode (beta)',
      'Browser extension',
    ],
    notIncluded: [
      'AI clip generation',
      'API access',
    ],
  },
  {
    name: 'Shogun',
    kanji: '将',
    subtitle: 'For teams & power users',
    price: { monthly: 39, annual: 29 },
    cta: 'Contact Us',
    ctaStyle: 'dark',
    features: [
      'Everything in Samurai',
      'Unlimited channels',
      'AI clip generator (early access)',
      'API access',
      'Team workspace (5 seats)',
      'Priority processing',
      'Custom export templates',
      'Dedicated support',
    ],
    notIncluded: [],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>価 — Value</span>
          <h2 className={styles.title}>Simple, Honest Pricing</h2>
          <p className={styles.subtitle}>No hidden fees. No per-minute charges. Flat plans for samurais of every level.</p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.toggleActive : styles.toggleInactive}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual pricing"
            >
              <span className={styles.toggleKnob}></span>
            </button>
            <span className={annual ? styles.toggleActive : styles.toggleInactive}>
              Annual <span className={styles.saveBadge}>Save 25%</span>
            </span>
          </div>
        </div>

        <div className={styles.cards}>
          {plans.map((plan, i) => (
            <div className={`${styles.card} ${plan.badge ? styles.featured : ''}`} key={i}>
              {plan.badge && <div className={styles.badge}>{plan.badge}</div>}

              <div className={styles.planTop}>
                <div className={styles.nameRow}>
                  <span className={styles.kanji}>{plan.kanji}</span>
                  <div>
                    <div className={styles.planName}>{plan.name}</div>
                    <div className={styles.planSub}>{plan.subtitle}</div>
                  </div>
                </div>
                <div className={styles.priceBlock}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>
                    {annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className={styles.period}>/mo</span>
                  )}
                  {plan.price.monthly === 0 && (
                    <span className={styles.period}>forever</span>
                  )}
                </div>
                {annual && plan.price.monthly > 0 && (
                  <div className={styles.billedNote}>Billed annually</div>
                )}
              </div>

              <a href="#" className={`${styles.cta} ${styles[`cta_${plan.ctaStyle}`]}`}>
                {plan.cta}
              </a>

              <div className={styles.divider}></div>

              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <li key={`not-${j}`} className={`${styles.feature} ${styles.featureOff}`}>
                    <span className={styles.cross}>✕</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.guarantee}>
          <span>🎋</span> 7-day free trial on all paid plans. No credit card required to start. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
