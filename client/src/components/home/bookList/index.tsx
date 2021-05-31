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
interface IBooks {
  books: IBook[];
}
const BookList = ({ books }: IBooks) => {
  return (
    <Container>
      {books.map((book) => (
        <BookItem
          key={book._id}
          id={book._id}
          title={book.title}
          author={book.author}
        />
      ))}
    </Container>
  );
};

export default BookList;
