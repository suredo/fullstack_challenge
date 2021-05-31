import { useEffect, useState } from "react";
import BookList from "../../components/home/bookList";
import Greetings from "../../components/home/greetings";
import Search from "../../components/home/search";
import { getBooks, getBooksBySearch } from "../../services/books";
import { Container } from "./style";
interface IBook {
  _id: string;
  title: string;
  description: string;
  author: string;
}
const Home = () => {
  const [books, setBooks] = useState<IBook[]>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setBooks([]);
    if (search) {
      getBooksBySearch(search).then((data) => setBooks(data.books));
    } else {
      getBooks().then((data) => setBooks(data.books));
    }
  }, [search]);
  return (
    <Container>
      <Search value={search} setSearch={setSearch} />
      {!search ? <Greetings /> : null}
      {books ? <BookList books={books} /> : null}
    </Container>
  );
};

export default Home;
