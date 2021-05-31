import { useEffect, useState } from "react";
import BookList from "../../components/home/bookList";
import Greetings from "../../components/home/greetings";
import MoreBooks from "../../components/home/moreBooks";
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
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setBooks([]);
    if (search) {
      getBooksBySearch(search, page).then((data) => setBooks(data.books));
    } else {
      getBooks(page).then((data) => setBooks(data.books));
    }
  }, [search, page]);
  return (
    <Container>
      <Search value={search} setSearch={setSearch} />
      {!search ? <Greetings /> : null}
      {books ? <BookList books={books} /> : null}
      {books ? <MoreBooks setPage={() => setPage(page + 1)} /> : null}
    </Container>
  );
};

export default Home;
