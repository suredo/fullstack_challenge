import {
  Container,
  Header,
  Cover,
  Content,
  BackIcon,
  Title,
  Author,
  Description,
  Back,
  Back1,
  Back2,
  Back3,
  Back4,
} from "./style";
import { useHistory, useParams } from "react-router-dom";
import TabBar from "../../components/detail/tabBar";
import { useEffect, useState } from "react";
import { getBook } from "../../services/books";
import Img from "../../assets/Oval.png";
import Img1 from "../../assets/Oval1.png";
import Img2 from "../../assets/Oval2.png";
import Img3 from "../../assets/Oval3.png";
import Img4 from "../../assets/Oval4.png";

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
        <Back src={Img} />
        <Back1 src={Img1} />
        <Back2 src={Img2} />
        <Back3 src={Img3} />
        <Back4 src={Img4} />
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
