import { useState, useEffect } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // active section on scroll
  useEffect(() => {
    const ids = ['about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '64px',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(8,13,24,0.85)',
      borderBottom: scrolled ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(59,130,246,0.15)',
      boxShadow: scrolled ? '0 1px 30px rgba(59,130,246,0.08)' : 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#hero" onClick={e => handleNav(e, '#hero')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: 32, height: 32, flexShrink: 0 }}>
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="#0a0f1a" />
            <text x="50%" y="54%" fontSize="18" fontWeight="900" fill="url(#navGrad)" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">V</text>
          </svg>
          {/* <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '1rem',
            background: 'linear-gradient(135deg,#60a5fa,#06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Vincent.dev</span> */}
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hide-mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => handleNav(e, l.href)}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: active === l.href.slice(1) ? '#60a5fa' : 'rgba(148,163,184,0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                paddingBottom: '2px',
              }}
              onMouseEnter={e => e.target.style.color = '#e2e8f0'}
              onMouseLeave={e => e.target.style.color = active === l.href.slice(1) ? '#60a5fa' : 'rgba(148,163,184,0.7)'}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNav(e, '#contact')}
            style={{
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
              color: '#fff',
              fontSize: '0.82rem',
              fontWeight: 600,
              borderRadius: '6px',
              textDecoration: 'none',
              border: '1px solid rgba(59,130,246,0.4)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.target.style.boxShadow = '0 4px 20px rgba(59,130,246,0.4)'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'translateY(0)' }}
          >
            Hire Me ↗
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none', flexDirection: 'column', gap: '5px' }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', height: '1.5px',
              background: '#60a5fa', borderRadius: '1px',
              width: i === 1 ? '16px' : '22px',
              transition: 'all 0.3s',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(4px,4px)'
                : i === 1 ? 'translateX(-8px)' : 'rotate(-45deg) translate(4px,-4px)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'rgba(8,13,24,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(59,130,246,0.15)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => handleNav(e, l.href)}
              style={{
                display: 'block', padding: '0.75rem 0',
                borderBottom: '1px solid rgba(59,130,246,0.08)',
                fontSize: '0.875rem', fontWeight: 500,
                color: 'rgba(148,163,184,0.7)', textDecoration: 'none',
              }}
            >{l.label}</a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNav(e, '#contact')}
            className="btn-primary"
            style={{ marginTop: '1rem', justifyContent: 'center', width: '100%' }}
          >Hire Me ↗</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
