import { BookImg, BookTitle, Container, BookAuthor } from "./style";
import { useHistory } from "react-router-dom";

const BookItem = () => {
  const history = useHistory();
  return (
    <Container onClick={() => history.push("/detail")}>
      <BookImg />
      <BookTitle>Hooked</BookTitle>
      <BookAuthor>by Jim Collins</BookAuthor>
    </Container>
  );
};

export default BookItem;
