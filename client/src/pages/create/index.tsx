import { Container, HeaderTitle, Label, Input, TextArea } from "./style";

const Create = () => (
  <Container>
    <HeaderTitle>Add a new book</HeaderTitle>
    <Label>Name</Label>
    <Input type="text" />
    <Label>Author</Label>
    <Input type="text" />
    <Label>Description</Label>
    <TextArea></TextArea>
  </Container>
);

export default Create;
