import { useEffect, useState } from "react";
import { getBooks } from "../../../services/books";
import BookItem from "./bookItem";
import { Container } from "./style";
interface IBook {
  _id: string;
  title: string;
  description: string;
  author: string;
}
const BookList = () => {
  const [books, setBooks] = useState<IBook[]>();
  useEffect(() => {
    getBooks().then((data) => setBooks(data.books));
  }, []);
  return (
    <Container>
      {books
        ? books.map((book) => (
            <BookItem
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
            />
          ))
        : null}
    </Container>
  );
};

export default BookList;
