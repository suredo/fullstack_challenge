import {
  Container,
  Tab,
  TabName,
  Separator,
  ReadIcon,
  ListenIcon,
  ShareIcon,
} from "./style";

const TabBar = () => (
  <Container>
    <Tab>
      <ReadIcon />
      <TabName>Read</TabName>
    </Tab>
    <Separator />
    <Tab>
      <ListenIcon />
      <TabName>Listen</TabName>
    </Tab>
    <Separator />
    <Tab>
      <ShareIcon />
      <TabName>Share</TabName>
    </Tab>
  </Container>
);

export default TabBar;
