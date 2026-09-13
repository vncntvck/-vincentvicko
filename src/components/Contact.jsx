import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, ArrowUpRight, CheckCircle, AlertCircle, Send } from 'lucide-react'

// ─── EmailJS config — isi dengan key kamu ───────────────────────────────────
// Daftar di https://emailjs.com, buat service + template, paste ID-nya di sini
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)

  const [form,     setForm]     = useState({ name:'', email:'', subject:'', message:'' })
  const [sending,  setSending]  = useState(false)
  const [sent,     setSent]     = useState(false)
  const [error,    setError]    = useState(false)

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

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true); setError(false); setSent(false)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name:'', email:'', subject:'', message:'' })
      setTimeout(() => setSent(false), 6000)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 6000)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" ref={ref} style={{ position:'relative', padding:'7rem 0', zIndex:1, background:'rgba(13,21,38,0.5)' }}>
      <div className="glow-blob" style={{ width:500,height:400,background:'rgba(59,130,246,0.07)',top:'50%',right:-80,transform:'translateY(-50%)' }} />

      <div style={{ maxWidth:'1152px', margin:'0 auto', padding:'0 1.5rem', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <p className="section-label" style={{ justifyContent:'center' }}>Get In Touch</p>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:800, letterSpacing:'-0.03em' }}>
            Let's Build <span className="gradient-text-blue">Something Great</span>
          </h2>
          <p style={{ color:'var(--text-muted)', marginTop:'1rem', fontSize:'0.95rem', maxWidth:480, marginInline:'auto' }}>
            Open for freelance projects, full-time roles, and interesting collaborations.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'3rem' }}>

          {/* Info cards */}
          <div className="reveal" style={{ opacity:0, transition:'opacity 0.7s, transform 0.7s' }}>
            {[
              { href:'mailto:vincentiusvicko4@gmail.com', Icon: Mail, label:'Email', value:'vincentiusvicko4@gmail.com' },
              {
                href:'https://github.com/vncntvck', target:'_blank',
                icon: (
                  <svg style={{ width:18,height:18 }} fill="#60a5fa" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
                label:'GitHub', value:'github.com/vncntvck',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.target || '_self'}
                rel="noreferrer"
                style={{
                  display:'flex', alignItems:'center', gap:'1rem',
                  background:'var(--bg-card)', border:'1px solid var(--border)',
                  borderRadius:12, padding:'1.25rem 1.5rem',
                  textDecoration:'none', marginBottom:'1rem',
                  transition:'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-hover)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(59,130,246,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{ width:44,height:44,borderRadius:10,flexShrink:0,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.2)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                  {item.Icon ? <item.Icon size={18} color="#60a5fa" /> : item.icon}
                </div>
                <div>
                  <p style={{ fontSize:'0.72rem',color:'var(--text-dim)',fontFamily:"'JetBrains Mono',monospace",textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'0.2rem' }}>{item.label}</p>
                  <p style={{ fontSize:'0.9rem',fontWeight:500,color:'#e2e8f0' }}>{item.value}</p>
                </div>
                <ArrowUpRight size={16} color="var(--text-dim)" style={{ marginLeft:'auto' }} />
              </a>
            ))}

            {/* Availability */}
            {/* <div style={{ background:'rgba(34,197,94,0.06)',border:'1px solid rgba(34,197,94,0.15)',borderRadius:12,padding:'1rem 1.25rem',display:'flex',alignItems:'center',gap:'0.75rem' }}>
              <span style={{ width:8,height:8,borderRadius:'50%',background:'#22c55e',display:'inline-block',flexShrink:0,boxShadow:'0 0 8px #22c55e' }} />
              <p style={{ fontSize:'0.85rem',color:'rgba(134,239,172,0.9)' }}>
                Currently available for new projects. Response within 24 hours.
              </p>
            </div> */}
          </div>

          {/* Form */}
          <div className="reveal" style={{ opacity:0, transition:'opacity 0.7s, transform 0.7s', transitionDelay:'0.15s' }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                <div>
                  <label style={{ display:'block',fontSize:'0.8rem',fontWeight:500,color:'var(--text-muted)',marginBottom:'0.5rem' }}>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
                </div>
                <div>
                  <label style={{ display:'block',fontSize:'0.8rem',fontWeight:500,color:'var(--text-muted)',marginBottom:'0.5rem' }}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label style={{ display:'block',fontSize:'0.8rem',fontWeight:500,color:'var(--text-muted)',marginBottom:'0.5rem' }}>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="form-input" placeholder="Project Inquiry" />
              </div>
              <div>
                <label style={{ display:'block',fontSize:'0.8rem',fontWeight:500,color:'var(--text-muted)',marginBottom:'0.5rem' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="form-input" rows={5} placeholder="Tell me about your project..." required />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent:'center', opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }} disabled={sending}>
                {sending
                  ? <><svg style={{ width:16,height:16,animation:'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" strokeLinecap="round"/></svg> Sending...</>
                  : <><span>Send Message</span><Send size={15} /></>
                }
              </button>

              {sent && (
                <div style={{ background:'rgba(34,197,94,0.08)',border:'1px solid rgba(34,197,94,0.2)',borderRadius:8,padding:'0.875rem 1rem',display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'rgba(134,239,172,0.9)' }}>
                  <CheckCircle size={18} color="#22c55e" style={{ flexShrink:0 }} />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {error && (
                <div style={{ background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:8,padding:'0.875rem 1rem',display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.875rem',color:'rgba(252,165,165,0.9)' }}>
                  <AlertCircle size={18} color="#ef4444" style={{ flexShrink:0 }} />
                  Something went wrong. Please email directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      <style>{`.reveal.visible{opacity:1!important;transform:translateY(0)!important;} .reveal{transform:translateY(30px);}`}</style>
    </section>
  )
}
