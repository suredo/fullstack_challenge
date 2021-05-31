import { BookImg, BookTitle, Container, BookAuthor } from "./style";
import { useHistory } from "react-router-dom";

interface IBook {
  id: string;
  title: string;
  author: string;
}

const BookItem = ({ id, title, author }: IBook) => {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/detail/${id}`)}>
      <BookImg />
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </Container>
  );
};

export default BookItem;
