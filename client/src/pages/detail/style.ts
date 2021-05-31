import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular";

export const Container = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export const Header = styled.div`
  background-color: #fff6e5;
  height: 282px;
  border-bottom-right-radius: 100px;
  position: relative;
`;

export const Cover = styled.img`
  width: 151px;
  height: 234px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -36px;
  background-color: red;
  box-shadow: 0px 10px 10px rgba(107, 103, 70, 0.3);
  border-radius: 5px;
`;

export const Content = styled.div`
  padding: 0 20px;
  margin-top: 67px;
`;

export const BackIcon = styled(ArrowBack)`
  height: 20px;
  width: 20px;
  position: absolute;
  left: 33px;
  top: 55px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #36383a;
`;

export const Author = styled.p`
  font-size: 16px;
  color: #ff6978;
  margin-top: 7px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: rgba(49, 49, 49, 0.6);
  line-height: 25px; ;
`;

export const BookTabs = styled.div``;
