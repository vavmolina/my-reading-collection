export const booksQuery = `*[_type == "book"] | order(dateRead desc) {
  _id,
  title,
  author,
  dateRead,
  genre,
  rating,
  isFavorite,
  coverImage {
    asset -> {
      url
    }
  }
}`