import {
  Container,
  Header,
  Cover,
  Content,
  BackIcon,
  Title,
  Author,
  Description,
} from "./style";
import { useHistory, useParams } from "react-router-dom";
import TabBar from "../../components/detail/tabBar";
import { useEffect, useState } from "react";
import { getBook } from "../../services/books";

interface ParamTypes {
  id: string;
}

const Detail = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    getBook(id).then((data) => {
      setTitle(data.book.title);
      setAuthor(data.book.author);
      setDescription(data.book.description);
    });
  }, [id]);
  return (
    <Container>
      <Header>
        <BackIcon onClick={history.goBack} />
        <Cover />
      </Header>
      <Content>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description>{description}</Description>
      </Content>
      <TabBar />
    </Container>
  );
};

export default Detail;
