import { BookImg, BookTitle, Container, BookAuthor } from "./style";

const BookItem = () => (
  <Container>
    <BookImg />
    <BookTitle>Hooked</BookTitle>
    <BookAuthor>by Jim Collins</BookAuthor>
  </Container>
);

export default BookItem;
