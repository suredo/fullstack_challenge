import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeAlt, Plus, User } from "@styled-icons/boxicons-regular";

export const Container = styled.div`
  background-color: white;
  width: calc(100vw - 110px);
  height: 59px;
  padding: 0 55px;
  position: fixed;
  bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ITab {
  path: string;
  tabname: string;
}

export const Tab = styled.div``;

export const TabLink = styled(Link)`
  color: ${(props: ITab) =>
    props.path === props.tabname ? "#313131" : "#bfbebf"};
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TabName = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 10px;
`;

export const HomeIcon = styled(HomeAlt)`
  width: 25px;
`;
export const PlusIcon = styled(Plus)`
  width: 25px;
`;
export const ProfileIcon = styled(User)`
  width: 25px;
`;
