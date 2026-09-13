import { useEffect, useRef } from 'react'
import { ArrowUpRight, Gamepad2, Film, LayoutDashboard } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Pecah Kelereng Rules',
    desc: 'A clean website presenting the rules of the traditional Pacah-Kelereng game in a modern, user-friendly interface.',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: 'https://github.com/vncntvck/pacah-kelereng',
    Icon: Gamepad2,
    color: 'rgba(59,130,246,0.08)',
    iconColor: '#60a5fa',
  },
  {
    num: '02',
    title: 'Movie App',
    desc: 'A movie browsing application in development, focused on clean UI and smooth user experience with API integration.',
    tags: ['In Progress', 'API', 'Vue.js'],
    link: '#',
    Icon: Film,
    color: 'rgba(6,182,212,0.08)',
    iconColor: '#22d3ee',
  },
  {
    num: '03',
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React + Vite. Modern dark design with smooth animations and clean code.',
    tags: ['React', 'Vite', 'Tailwind'],
    link: '#',
    Icon: LayoutDashboard,
    color: 'rgba(139,92,246,0.08)',
    iconColor: '#a78bfa',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} style={{ position:'relative', padding:'7rem 0', zIndex:1 }}>
      <div className="glow-blob" style={{ width:500,height:400,background:'rgba(6,182,212,0.06)',bottom:-50,left:-80 }} />

      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'0 1.5rem', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <p className="section-label" style={{ justifyContent:'center' }}>Featured Projects</p>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:800, letterSpacing:'-0.03em' }}>
            Some of My <span className="gradient-text-blue">Recent Work</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.5rem' }}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="reveal card"
              style={{
                opacity:0, transform:'translateY(30px)',
                transition:`opacity 0.7s ease ${i*0.1}s, transform 0.7s ease ${i*0.1}s`,
                overflow:'hidden',
              }}
            >
              {/* Thumbnail */}
              <div style={{ aspectRatio:'16/9', position:'relative', overflow:'hidden', background: p.color }}>
                <div style={{
                  position:'absolute', inset:0,
                  backgroundImage:'linear-gradient(rgba(59,130,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.06) 1px,transparent 1px)',
                  backgroundSize:'24px 24px',
                }} />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div style={{
                    width:56, height:56, borderRadius:14,
                    background:'rgba(8,13,24,0.6)',
                    border:'1px solid rgba(59,130,246,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <p.Icon size={24} color={p.iconColor} />
                  </div>
                </div>
                <span style={{
                  position:'absolute', top:12, left:12,
                  fontFamily:"'JetBrains Mono',monospace",
                  fontSize:'0.65rem', fontWeight:700,
                  color:'rgba(148,163,184,0.4)', letterSpacing:'0.1em',
                }}>{p.num}</span>
              </div>

              {/* Body */}
              <div style={{ padding:'1.5rem' }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem', marginBottom:'0.75rem' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3 style={{ fontSize:'1rem', fontWeight:700, color:'#e2e8f0', marginBottom:'0.5rem', letterSpacing:'-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.65, marginBottom:'1.25rem' }}>{p.desc}</p>
                <a
                  href={p.link}
                  target={p.link !== '#' ? '_blank' : '_self'}
                  rel="noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:'0.4rem',
                    fontSize:'0.8rem', fontWeight:600, color:'var(--blue-light)',
                    textDecoration:'none', transition:'gap 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap='0.65rem'}
                  onMouseLeave={e => e.currentTarget.style.gap='0.4rem'}
                >
                  View Project <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign:'center', marginTop:'3rem' }}>
          <a
            href="https://github.com/vncntvck"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}
          >
            <svg style={{ width:16,height:16 }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See All on GitHub
          </a>
        </div>

      </div>

      <style>{`.reveal.visible{opacity:1!important;transform:translateY(0)!important;}`}</style>
    </section>
  )
}
