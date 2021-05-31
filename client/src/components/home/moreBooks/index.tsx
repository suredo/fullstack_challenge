import { MoreIcon, Container } from "./style";

interface IMoreBooks {
  setPage: () => void;
}

const MoreBooks = ({ setPage }: IMoreBooks) => (
  <Container onClick={setPage}>
    <MoreIcon />
  </Container>
);

export default MoreBooks;
