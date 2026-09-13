import { Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer style={{ position:'relative', zIndex:1, borderTop:'1px solid var(--border)', background:'rgba(8,13,24,0.9)' }}>
      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'2.5rem 1.5rem' }}>

        {/* Top row */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'1.5rem', marginBottom:'2rem', paddingBottom:'2rem', borderBottom:'1px solid var(--border)' }}>

          {/* Logo */}
          <div>
            {/* <button onClick={() => scrollTo('#hero')} style={{ background:'none', border:'none', cursor:'pointer', padding:0, display:'block' }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:700, fontSize:'1rem', background:'linear-gradient(135deg,#60a5fa,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                Vincent.dev
              </span>
            </button> */}
            <p style={{ fontSize:'0.78rem', color:'var(--text-dim)', marginTop:'0.35rem' }}>
              Building clean, modern web experiences.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap' }}>
            {navLinks.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:'0.82rem', fontWeight:500, color:'var(--text-dim)', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text-dim)'}
              >{l.label}</button>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display:'flex', gap:'0.75rem' }}>
            {[
              {
                href: 'https://github.com/vncntvck',
                label: 'GitHub',
                icon: (
                  <svg style={{ width:16,height:16 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              { href: 'mailto:vincentiusvicko4@gmail.com', label: 'Email', icon: <Mail size={16} /> },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'GitHub' ? '_blank' : '_self'}
                rel="noreferrer"
                aria-label={item.label}
                style={{
                  width:38, height:38, borderRadius:8,
                  background:'var(--bg-card)', border:'1px solid var(--border)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'var(--text-muted)', textDecoration:'none',
                  transition:'border-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-hover)'; e.currentTarget.style.color='#60a5fa'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.transform='translateY(0)' }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'0.75rem' }}>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--text-dim)' }}>
            © {new Date().getFullYear()} Vincent — All rights reserved.
          </p>
          <button
            onClick={() => scrollTo('#hero')}
            style={{ background:'none', border:'none', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:'0.4rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--text-dim)', transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text-dim)'}
          >
            Back to top <ArrowUp size={13} />
          </button>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--text-dim)' }}>
            Built with React · Vite
          </p>
        </div>

      </div>
    </footer>
  )
}
