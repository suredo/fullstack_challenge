import { Container, Input, SearchIcon } from "./style";
interface ISearch {
  value: string;
  setSearch: (e: string) => void;
}
const Search = ({ value, setSearch }: ISearch) => {
  return (
    <Container>
      <SearchIcon />
      <Input
        type="string"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search book"
      />
    </Container>
  );
};

export default Search;
