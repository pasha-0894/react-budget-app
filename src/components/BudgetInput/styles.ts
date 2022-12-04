import styled from "styled-components";

export const BudgetInputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #7cc6fe;
  height: 100px;
  width: 100%;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #7cc6fe;
  height: 40px;
  width: 100%;
`;

export const Input = styled.input`
  align-items: center;
  background: #7cc6fe;
  height: 24px;
  width: 153px;
  border: none;

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
