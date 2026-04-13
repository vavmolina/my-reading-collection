'use client'

import { useState } from 'react'

export default function InfoBubble() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', top: '32px', right: '40px', zIndex: 100 }}>

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid #A0856C',
          background: open ? '#A0856C' : 'transparent',
          color: open ? '#FAF7F2' : '#A0856C',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        i
      </button>

      {/* Popup */}
      {open && (
        <div style={{
          position: 'absolute',
          top: '44px',
          right: '0',
          width: '350px',
          backgroundColor: '#FAF7F2',
          border: '1px solid #E8DDD0',
          borderRadius: '10px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(44, 26, 14, 0.1)',
        }}>

          {/* About */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#A0856C',
            fontFamily: 'var(--font-mono)',
            margin: '0 0 8px',
          }}>About this project</p>
          <p style={{
            fontSize: '13px',
            color: '#2C1A0E',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.6',
            margin: '0 0 20px',
          }}>
            A personal reading log to track books I've finished — with cover images, ratings, reviews, genres, and favorites. Built as a self-initiated project to explore headless CMS architecture and modern web development through vibe coding.
          </p>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E8DDD0',
            margin: '0 0 20px',
          }} />

          {/* Built with */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#A0856C',
            fontFamily: 'var(--font-mono)',
            margin: '0 0 12px',
          }}>Built with</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { name: 'Next.js', desc: 'React framework' },
              { name: 'Sanity CMS', desc: 'Content management' },
              { name: 'TypeScript', desc: 'Language' },
              { name: 'Vercel', desc: 'Deployment' },
              { name: 'Claude', desc: 'AI agent' },
            ].map(item => (
              <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{
                  fontSize: '13px',
                  color: '#2C1A0E',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {item.name}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: '#A0856C',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {item.desc}
                </span>
              </div>
              ))}

              {/* Divider */}
              <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#E8DDD0',
                margin: '0 0 20px',
              }} />
              
              {/* Links */}
              <p style={{
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#A0856C',
                fontFamily: 'var(--font-mono)',
                margin: '0 0 20px',
              }}>
                References
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/vavmolina/my-reading-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '13px',
                    color: '#2C1A0E',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    borderBottom: '1px solid #A0856C',
                    paddingBottom: '2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  GitHub <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                
                <a href="https://vmolina.framer.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '13px',
                    color: '#2C1A0E',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    borderBottom: '1px solid #A0856C',
                    paddingBottom: '2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Portfolio <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}