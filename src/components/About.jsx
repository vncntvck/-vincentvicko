import { useEffect, useRef } from 'react'
import { Code2, Calendar, FolderOpen, Users, Star, ArrowRight } from 'lucide-react'

const stats = [
  { icon: Calendar,    num: '1+',   label: 'Years Learning' },
  { icon: FolderOpen,  num: '5+',  label: 'Projects Built' },
  { icon: Users,       num: '5+',   label: 'Happy Clients' },
  { icon: Star,        num: '100%', label: 'Dedication' },
]

export default function About() {
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
    <section id="about" ref={ref} style={{ position:'relative', padding:'7rem 0', zIndex:1 }}>
      <div className="glow-blob" style={{ width:500,height:400,background:'rgba(59,130,246,0.06)',top:'50%',left:-100,transform:'translateY(-50%)' }} />

      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'0 1.5rem', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'4rem', alignItems:'center' }}>

          {/* Photo */}
          <div className="reveal" style={{ opacity:0, transition:'opacity 0.7s, transform 0.7s', transitionDelay:'0.1s' }}>
            <div style={{ position:'relative', maxWidth:400, margin:'0 auto' }}>
              <div style={{ position:'absolute', inset:-12, border:'1px solid var(--border)', borderRadius:20, pointerEvents:'none' }} />
              <div style={{ position:'absolute', inset:-24, border:'1px solid rgba(59,130,246,0.06)', borderRadius:24, pointerEvents:'none' }} />
              <div style={{ aspectRatio:'4/5', background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:16, overflow:'hidden', position:'relative' }}>
                <img
                  src="/PEPE.jpg"
                  alt="Vincent"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' }}
                />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'30%', background:'linear-gradient(to top,rgba(8,13,24,0.6),transparent)' }} />
              </div>
              {/* Floating badge */}
              <div style={{
                position:'absolute', bottom:-16, right:-16,
                background:'var(--bg-card)', border:'1px solid var(--border)',
                borderRadius:12, padding:'0.75rem 1.25rem',
                display:'flex', alignItems:'center', gap:'0.6rem',
                boxShadow:'0 8px 24px rgba(59,130,246,0.15)',
              }}>
                <Code2 size={18} color="#60a5fa" />
                <div>
                  <p style={{ fontSize:'0.7rem', color:'var(--text-dim)', fontFamily:"'JetBrains Mono',monospace" }}>Status</p>
                  <p style={{ fontSize:'0.82rem', fontWeight:600, color:'#60a5fa' }}>FRONTEND</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="reveal" style={{ opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
              <p className="section-label">About Me</p>
              <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:'1.5rem' }}>
                I'm passionate about{' '}
                <span className="gradient-text-blue">creating digital solutions</span>
              </h2>
              <p style={{ color:'var(--text-muted)', lineHeight:1.8, fontSize:'0.95rem', marginBottom:'1rem' }}>
                I'm a front-end developer who enjoys building clean, modern, and user-friendly websites.
                I work primarily with Laravel, Tailwind CSS, and JavaScript to bring creative ideas to life.
              </p>
              <p style={{ color:'var(--text-muted)', lineHeight:1.8, fontSize:'0.95rem', marginBottom:'2rem' }}>
                Currently focused on improving my skills and working on real-world projects while
                growing my freelance journey — one line of code at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'2rem', opacity:0, transition:'opacity 0.7s, transform 0.7s', transitionDelay:'0.1s' }}>
              {stats.map(({ icon: Icon, num, label }) => (
                <div key={label} className="stat-card">
                  <Icon size={20} color="#60a5fa" style={{ margin:'0 auto 0.5rem', display:'block' }} />
                  <p style={{ fontSize:'2rem', fontWeight:800, background:'linear-gradient(135deg,#60a5fa,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{num}</p>
                  <p style={{ fontSize:'0.78rem', color:'var(--text-muted)', marginTop:'0.25rem', fontWeight:500 }}>{label}</p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ opacity:0, transition:'opacity 0.7s, transform 0.7s', transitionDelay:'0.2s' }}>
              <button
                className="btn-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' })}
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem' }}
              >
                Let's Work Together <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .reveal { transform: translateY(30px); }
      `}</style>
    </section>
  )
}
