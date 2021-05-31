import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  padding: 53px 27px;
  min-height: calc(100vh - 170px);
`;

export const HeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #ff6978;
`;

export const Label = styled.h1`
  font-size: 16px;
  color: #000000;
  margin-top: 38px;
`;

export const Input = styled.input`
  height: 43px;
  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  width: calc(100% - 10px);
  border: none;
  padding: 5px;
  color: #54565a;
  :focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  height: 220px;
  background: #fdfcfc;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  border: none;
  padding: 5px;
  width: calc(100% - 10px);
  color: #54565a;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  color: #ff6978;
  font-size: 30px;
  font-weight: 500px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
`;
