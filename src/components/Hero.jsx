import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'

const techs = ['Laravel', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'Flutter', 'MySQL']

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 120)
    })
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={ref} style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: '64px', overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div className="glow-blob" style={{ width:600,height:500,background:'rgba(29,78,216,0.12)',top:-100,right:-150 }} />
      <div className="glow-blob" style={{ width:400,height:400,background:'rgba(6,182,212,0.07)',bottom:50,left:-100 }} />

      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'0 1.5rem', width:'100%', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'4rem', alignItems:'center' }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="reveal" style={{ marginBottom:'1.5rem', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.25)',
                borderRadius:'999px', padding:'0.35rem 1rem',
                fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem',
                fontWeight:500, color:'#60a5fa', letterSpacing:'0.08em',
              }}>
                <span style={{ width:6,height:6,borderRadius:'50%',background:'#22c55e',display:'inline-block',boxShadow:'0 0 6px #22c55e' }} />
                Available for work
              </span>
            </div>

            {/* Heading */}
            <div className="reveal" style={{ transitionDelay:'0.1s', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.82rem', color:'rgba(148,163,184,0.7)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'0.75rem' }}>
                Hi, I'm a Developer
              </p>
              <h1 style={{ fontSize:'clamp(2.8rem,7vw,5rem)', fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.0, marginBottom:'0.5rem' }}>
                <span className="gradient-text">Vincent</span>
              </h1>
              <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.2rem)', fontWeight:700, letterSpacing:'-0.02em', color:'rgba(226,232,240,0.85)', marginBottom:'1.5rem' }}>
                I build things for the web.
              </h2>
            </div>

            {/* Description */}
            <p className="reveal" style={{ maxWidth:460, color:'rgba(148,163,184,0.8)', fontSize:'1rem', lineHeight:1.75, marginBottom:'2rem', transitionDelay:'0.2s', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              A front-end developer passionate about UI/UX design and turning ideas into
              vibrant, interactive web experiences using Laravel, Vue, and modern CSS.
            </p>

            {/* Tech badges */}
            <div className="reveal" style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'2rem', transitionDelay:'0.25s', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              {techs.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            {/* CTA */}
            <div className="reveal" style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', transitionDelay:'0.3s', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              <button className="btn-primary" onClick={() => scrollTo('#projects')}>
                View My Work →
              </button>
              <button className="btn-outline" onClick={() => scrollTo('#contact')}>
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right: Code card */}
          <div className="reveal" style={{ transitionDelay:'0.2s', opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
            <div style={{
              background:'var(--bg-card)', border:'1px solid var(--border)',
              borderRadius:16, overflow:'hidden',
              boxShadow:'0 24px 60px rgba(59,130,246,0.12)',
            }}>
              {/* Window chrome */}
              <div style={{ background:'rgba(59,130,246,0.06)', borderBottom:'1px solid var(--border)', padding:'0.75rem 1.25rem', display:'flex', alignItems:'center', gap:'0.6rem' }}>
                {['#ef4444','#f59e0b','#22c55e'].map(c => (
                  <span key={c} style={{ width:10,height:10,borderRadius:'50%',background:c,display:'inline-block' }} />
                ))}
                <span style={{ marginLeft:'0.75rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--text-dim)' }}>portfolio.js</span>
              </div>
              {/* Code */}
              <div style={{ padding:'1.75rem 2rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.82rem', lineHeight:2.1 }}>
                <p style={{ color:'var(--text-dim)' }}>{'// Vincent\'s profile'}</p>
                <p style={{ marginTop:'0.5rem' }}>
                  <span style={{ color:'#818cf8' }}>const </span>
                  <span style={{ color:'#e2e8f0' }}>developer </span>
                  <span style={{ color:'#60a5fa' }}>= </span>
                  <span style={{ color:'#e2e8f0' }}>{'{'}</span>
                </p>
                {[
                  ['name',      '"Vincentius Vicko"'],
                  ['role',      '"Frontend Developer"'],
                  ['stack',     '["Laravel","Vue","Tailwind"]'],
                  ['available', 'true'],
                  ['passion',   '"clean code"'],
                ].map(([k, v]) => (
                  <p key={k} style={{ paddingLeft:'1.5rem' }}>
                    <span style={{ color:'#94a3b8' }}>{k}</span>
                    <span style={{ color:'#e2e8f0' }}>: </span>
                    <span style={{ color: k === 'available' ? '#f472b6' : '#34d399' }}>{v}</span>
                    <span style={{ color:'#e2e8f0' }}>,</span>
                  </p>
                ))}
                <p><span style={{ color:'#e2e8f0' }}>{'};'}</span></p>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display:'flex', gap:'1rem', marginTop:'1.5rem', justifyContent:'center' }}>
              <a href="https://github.com/vncntvck" target="_blank" rel="noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'rgba(148,163,184,0.7)', fontSize:'0.82rem', fontWeight:500, textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(148,163,184,0.7)'}
              >
                <svg style={{ width:16,height:16 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:vincentiusvicko4@gmail.com"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'rgba(148,163,184,0.7)', fontSize:'0.82rem', fontWeight:500, textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(148,163,184,0.7)'}
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:32, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:8, animation:'bounce 2s infinite' }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--text-dim)', letterSpacing:'0.2em' }}>SCROLL</span>
        <svg width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </div>

      <style>{`
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .reveal { transform: translateY(30px); }
      `}</style>
    </section>
  )
}
