import styled from "styled-components";

export const FormStyled = styled.form`
  display: grid;
  grid-gap: 20px;
`;

export const Input = styled.input`
  width: 335px;
  height: 50px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #999999;
  }
`;

export const Button = styled.button`
  width: 335px;
  height: 49px;
  background: #23c9ff;
  border-radius: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #ffffff;
`;
