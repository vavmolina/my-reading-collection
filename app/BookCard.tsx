'use client'

import Image from 'next/image'

interface Book {
  _id: string
  title: string
  author: string
  genre: string[]
  rating: number
  review: string
  coverImage?: {
    asset?: {
      url: string
    }
  }
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >

      {/* Cover */}
        <div style={{
            aspectRatio: '2/2.55',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#E8DDD0',
            marginBottom: '12px',
            boxShadow: '4px 6px 20px rgba(44, 26, 14, 0.12)',
            width: '100%',
            }}>
            {book.coverImage?.asset?.url ? (
                <Image
                src={book.coverImage.asset.url}
                alt={book.title ?? 'Book cover'}
                width={220}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#A0856C',
            fontSize: '32px'
          }}>📚</div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        {/* Rating */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} style={{
              fontSize: '20px',
              fontFamily: 'var(--font-mono)',
              color: i < book.rating ? '#A0856C' : '#D9CDBF'
            }}>★</span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 style={{
          fontSize: '16px',
          fontWeight: '400',
          color: '#2C1A0E',
          margin: '0 0 4px',
          lineHeight: '1.3',
          fontFamily: 'var(--font-serif)'
        }}>{book.title}</h2>
        <p style={{
          fontSize: '13px',
          fontWeight: '300',
          color: '#8C7B6B',
          margin: '0 0 8px',
          fontFamily: 'var(--font-sans)'
        }}>{book.author}</p>

        {/* Genres */}
        {book.genre?.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            marginBottom: '10px'
          }}>
            {book.genre.map((g) => (
              <span key={g} style={{
                fontSize: '10px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: '#A0856C',
                backgroundColor: '#EFE8DF',
                padding: '3px 8px',
                borderRadius: '20px',
                fontFamily: 'var(--font-mono)'
              }}>{g}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}