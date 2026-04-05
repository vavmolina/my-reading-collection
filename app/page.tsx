import { client } from '@/lib/sanity'
import { booksQuery } from '@/lib/queries'
import YearFilter from './SidebarFilter'

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

export default async function Home() {
  const books: Book[] = await client.fetch(booksQuery)

  const years = Array.from(
    new Set(
      books
        .map(book => book.dateRead?.slice(0, 4))
        .filter(Boolean)
    )
  ).sort((a, b) => Number(b) - Number(a)) as string[]

  return (
    <>
      <style>{`
        .page {
          min-height: 100vh;
          background-color: #FAF7F2;
          font-family: var(--font-serif);
          padding: 60px 90px;
        }

        /* Top heading section */
        .page-header {
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid #E8DDD0;
        }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #A0856C;
          margin-bottom: 12px;
          font-family: var(--font-mono);
        }

        .heading {
          font-size: 42px;
          font-weight: 400;
          color: #2C1A0E;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .divider {
          width: 40px;
          height: 2px;
          background-color: #A0856C;
          margin-bottom: 16px;
        }

        .subtext {
          color: #8C7B6B;
          font-size: 14px;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
        }

        /* Two column layout below header */
        .content {
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        /* Filter column — 1/6 */
        .filter-column {
          width: calc(100% / 6);
          min-width: calc(100% / 6);
          position: sticky;
          top: 60px;
        }

        .filter-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Books column — rest */
        .grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 64px 32px;
          align-content: start;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .page {
            padding: 48px 48px;
          }

          .content {
            flex-direction: column;
            gap: 32px;
          }

          .filter-column {
            width: 100%;
            min-width: 100%;
            position: relative;
            top: 0;
          }

          .filter-list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 24px;
          }

          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px 24px;
            padding: 0;
          }
        }

        @media (max-width: 640px) {
          .page {
            padding: 36px 24px;
          }

          .heading {
            font-size: 28px;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 16px;
            padding: 0;
          }
        }
      `}</style>

      <div className="page">

        {/* Top Header */}
        <div className="page-header">
          <p className="eyebrow">Personal Collection</p>
          <h1 className="heading">vhinny's library</h1>
          <div className="divider" />
          <p className="subtext">
            {books.length} {books.length === 1 ? 'book' : 'books'} read
          </p>
        </div>

        {/* Filter + Books */}
        <YearFilter books={books} years={years} />

      </div>
    </>
  )
}