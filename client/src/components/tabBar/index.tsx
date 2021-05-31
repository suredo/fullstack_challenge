import {
  Container,
  HomeIcon,
  PlusIcon,
  ProfileIcon,
  Tab,
  TabLink,
  TabName,
} from "./styles";
import { useLocation } from "react-router-dom";

const TabBar = () => {
  const location = useLocation();
  return (
    <Container>
      <Tab>
        <TabLink to="/" path={location.pathname} tabname="/">
          <HomeIcon />
          <TabName>Home</TabName>
        </TabLink>
      </Tab>
      <Tab>
        <TabLink to="/create" path={location.pathname} tabname="/create">
          <PlusIcon />
          <TabName>Add book</TabName>
        </TabLink>
      </Tab>
      <Tab>
        <TabLink to="/profile" path={location.pathname} tabname="/profile">
          <ProfileIcon />
          <TabName>Profile</TabName>
        </TabLink>
      </Tab>
    </Container>
  );
};

export default TabBar;
