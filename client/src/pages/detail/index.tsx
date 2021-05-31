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
import { useHistory } from "react-router-dom";
import TabBar from "../../components/detail/tabBar";

const Detail = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <BackIcon onClick={history.goBack} />
        <Cover />
      </Header>
      <Content>
        <Title>Hooked</Title>
        <Author>Nir Eyal</Author>
        <Description>
          How do successful companies create products people can’t put down? Why
          do some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?
        </Description>
      </Content>
      <TabBar />
    </Container>
  );
};

export default Detail;
