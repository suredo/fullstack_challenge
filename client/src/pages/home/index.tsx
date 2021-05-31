import BookList from "../../components/home/bookList";
import Greetings from "../../components/home/greetings";
import Search from "../../components/home/search";
import { Container } from "./style";

const Home = () => (
  <Container>
    <Search />
    <Greetings />
    <BookList />
  </Container>
);

export default Home;
