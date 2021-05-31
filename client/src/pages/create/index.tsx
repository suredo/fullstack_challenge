import { useState } from "react";
import { addBook } from "../../services/books";
import {
  Container,
  HeaderTitle,
  Label,
  Input,
  TextArea,
  Button,
} from "./style";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reqResult, setReqResult] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReqResult("");
    const result = addBook({
      title: title,
      description: description,
      author: author,
    });
    result.then((data) => setReqResult(data.msg));
  };
  return (
    <Container>
      <HeaderTitle>{reqResult ? reqResult : "Add a new book"}</HeaderTitle>
      <form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Label>Author</Label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <Label>Description</Label>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></TextArea>
        <Button>Send</Button>
      </form>
    </Container>
  );
};

export default Create;
