import { useState } from 'react'
import './App.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and personal experiments.',
    cta: 'Get started',
    ctaStyle: 'btn-outline btn-lg plan-cta',
    highlight: false,
    features: [
      '3 projects',
      '5 GB storage',
      'Community support',
      'Basic analytics',
      'Public repos only',
    ],
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For individual developers who need more power and privacy.',
    cta: 'Start free trial',
    ctaStyle: 'btn-primary btn-lg plan-cta',
    highlight: true,
    features: [
      'Unlimited projects',
      '50 GB storage',
      'Priority support',
      'Advanced analytics',
      'Private repos',
      'Custom domains',
      'CI/CD integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Tailored for teams that need security, compliance, and scale.',
    cta: 'Talk to sales',
    ctaStyle: 'btn-outline btn-lg plan-cta',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'SSO / SAML',
      'SLA guarantee',
      'Custom contracts',
      'On-premise option',
    ],
  },
]

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built on Vite with instant HMR. Your feedback loop stays under 50ms no matter how large the project grows.',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Dev',
    description: 'Claude Code writes, refactors, and ships features alongside you — cutting development time in half.',
  },
  {
    icon: '🛡️',
    title: 'Type Safe',
    description: 'Full TypeScript coverage from day one. Catch bugs at compile time, not at 2 AM in production.',
  },
  {
    icon: '🎨',
    title: 'Design Ready',
    description: 'Clean component primitives and a consistent design system you can extend without fighting the defaults.',
  },
  {
    icon: '📦',
    title: 'Zero Config',
    description: 'Sensible defaults for bundling, linting, and formatting so your team ships instead of configuring.',
  },
  {
    icon: '🚀',
    title: 'Deploy Anywhere',
    description: 'Static output that drops onto Vercel, Netlify, S3, or any CDN with a single command.',
  },
]

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="site">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark">◆</span>
            <span className="logo-text">Launchpad</span>
          </a>

          <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
            <a href="#">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
          </nav>

          <div className="nav-actions">
            <a href="#" className="btn-ghost">Sign in</a>
            <a href="#" className="btn-primary">Get started</a>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setNavOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Now in public beta · <a href="#">Read the announcement →</a></div>
          <h1 className="hero-title">
            Build faster with<br />
            <span className="gradient-text">AI-powered tools</span>
          </h1>
          <p className="hero-subtitle">
            Mi primera app con Claude Code. The modern stack for teams who want to ship great software — without the boilerplate.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary btn-lg">Start for free</a>
            <a href="#" className="btn-outline btn-lg">See a demo →</a>
          </div>
          <p className="hero-note">No credit card required · Free tier forever</p>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Features</p>
            <h2 className="section-title">Everything you need to ship</h2>
            <p className="section-subtitle">
              A curated set of tools and conventions that work together — so you spend time on product, not plumbing.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(f => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-subtitle">
              No hidden fees. No surprise invoices. Pick the plan that fits and upgrade any time.
            </p>
          </div>
          <div className="plan-grid">
            {plans.map(plan => (
              <div className={`plan-card ${plan.highlight ? 'plan-highlight' : ''}`} key={plan.name}>
                {plan.highlight && <div className="plan-badge">Most popular</div>}
                <div className="plan-header">
                  <p className="plan-name">{plan.name}</p>
                  <div className="plan-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <a href="#" className={plan.ctaStyle}>{plan.cta}</a>
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <span className="check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Ready to build something great?</h2>
          <p>Join thousands of developers shipping faster with Launchpad. Set up in under two minutes.</p>
          <div className="cta-actions">
            <a href="#" className="btn-primary btn-lg">Get started for free</a>
            <a href="#" className="btn-ghost-light btn-lg">Talk to sales</a>
          </div>
        </div>
        <div className="cta-glow" aria-hidden="true" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo">
                <span className="logo-mark">◆</span>
                <span className="logo-text">Launchpad</span>
              </span>
              <p className="footer-tagline">The modern stack for teams who ship.</p>
              <div className="footer-socials">
                <a href="#" aria-label="Twitter / X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="Discord">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <p className="footer-col-title">Product</p>
                <a href="#">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#">Changelog</a>
                <a href="#">Roadmap</a>
              </div>
              <div className="footer-col">
                <p className="footer-col-title">Company</p>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
              <div className="footer-col">
                <p className="footer-col-title">Resources</p>
                <a href="#">Docs</a>
                <a href="#">API reference</a>
                <a href="#">Status</a>
                <a href="#">Support</a>
              </div>
              <div className="footer-col">
                <p className="footer-col-title">Legal</p>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookie policy</a>
                <a href="#">Security</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Launchpad, Inc. All rights reserved.</p>
            <p className="footer-built">Built with Claude Code</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
