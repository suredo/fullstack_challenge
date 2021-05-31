import { useState } from "react";
import { Container, Input, SearchIcon } from "./style";

const Search = () => {
  const [input, setInput] = useState<string>("");
  return (
    <Container>
      <SearchIcon />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search book"
      />
    </Container>
  );
};

export default Search;
