'use client'

import { useState } from 'react'
import BookCard from './BookCard'

interface Book {
  _id: string
  title: string
  author: string
  dateRead: string
  genre: string[]
  rating: number
  review: string
  isFavorite?: boolean
  coverImage?: { asset?: { url: string } }
}

interface Props {
  books: Book[]
  years: string[]
}

export default function YearFilter({ books, years }: Props) {
  const [active, setActive] = useState<string>('favorites')

  const filtered =
    active === 'all'
      ? books
      : active === 'favorites'
      ? books.filter(book => book.isFavorite)
      : books.filter(book => book.dateRead?.startsWith(active))

  const buttonStyle = (isActive: boolean) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left' as const,
    padding: '4px 0',
    fontSize: '13px',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: isActive ? '#3D3D3D' : '#A0856C',
    borderBottom: isActive ? '1px solid #3D3D3D' : '1px solid transparent',
    transition: 'all 0.2s ease',
    width: 'fit-content',
    display: 'block',
  })

  return (
    <div className="content">

      {/* Filter Column */}
      <aside className="filter-column">
        <div className="filter-list">
          <button onClick={() => setActive('favorites')} style={buttonStyle(active === 'favorites')}>
            Favorites
          </button>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setActive(year)}
              style={buttonStyle(active === year)}
            >
              {year}
            </button>
          ))}
          <button onClick={() => setActive('all')} style={buttonStyle(active === 'all')}>
            All
          </button>
        </div>
      </aside>

      {/* Books Grid */}
      <section className="grid">
        {filtered.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>

    </div>
  )
}