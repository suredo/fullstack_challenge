import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";
export const Container = styled.div`
  background-color: white;
  height: 48px;
  border-radius: 10px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchIcon = styled(Search)`
  width: 16px;
  height: 16px;
  color: #f0f0f0;
`;

export const Input = styled.input`
  flex: 1;
  color: #54565a;
  border: none;
  :focus {
    outline: none;
  }
`;
