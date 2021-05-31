import styled from "styled-components";
import { BookOpen, Headphone } from "@styled-icons/boxicons-regular";
import { ShareAlternative } from "@styled-icons/entypo/ShareAlternative";

export const Container = styled.div`
  background-color: white;
  width: calc(100vw - 80px);
  height: 59px;
  padding: 0 20px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
`;

export const Tab = styled.div`
  color: #bfbebf;
`;

export const TabName = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;
  color: #3f4043;
`;

export const Separator = styled.div`
  width: 1px;
  height: 16px;
  border-right: 1px solid #979797;
`;

export const ReadIcon = styled(BookOpen)`
  width: 25px;
`;
export const ListenIcon = styled(Headphone)`
  width: 25px;
`;
export const ShareIcon = styled(ShareAlternative)`
  width: 25px;
`;
