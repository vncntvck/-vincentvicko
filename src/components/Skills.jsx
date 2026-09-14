import { useEffect, useRef } from 'react'

const skills = [
  { label: 'HTML5',      icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { label: 'CSS3',       icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { label: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { label: 'PHP',        icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { label: 'Laravel',    icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { label: 'Alpine.js',  icon: 'https://cdn.simpleicons.org/alpinedotjs/8BC0D0' },
  { label: 'Tailwind',   icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { label: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { label: 'Git',        icon: 'https://cdn.simpleicons.org/git/F05032' },
  { label: 'GitHub',     icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { label: 'Flutter',    icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { label: 'Figma',      icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { label: 'VS Code',    icon: 'https://cdn.simpleicons.org/vscodium/007ACC' },
  { label: 'Postman',    icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { label: 'Vite',       icon: 'https://cdn.simpleicons.org/vite/646CFF' },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 60)
          })
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ position:'relative', padding:'7rem 0', zIndex:1, background:'rgba(13,21,38,0.5)' }}>
      <div className="glow-blob" style={{ width:500,height:400,background:'rgba(59,130,246,0.07)',top:'50%',right:-100,transform:'translateY(-50%)' }} />

      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'0 1.5rem', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <p className="section-label" style={{ justifyContent:'center' }}>My Skills</p>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:800, letterSpacing:'-0.03em' }}>
            Technologies I <span className="gradient-text-blue">Master</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.25rem',
        }}>
          {skills.map((skill, i) => (
            <div
              key={skill.label}
              className="reveal"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(59,130,246,0.12)'
                e.currentTarget.style.transition = 'border-color 0.3s, transform 0.3s, box-shadow 0.3s'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img
                src={skill.icon}
                alt={skill.label}
                style={{ width: 40, height: 40, objectFit: 'contain' }}
                loading="lazy"
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textAlign: 'center' }}>
                {skill.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  )
}
