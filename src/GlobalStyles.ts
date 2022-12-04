import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const TicketTitle = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-left: 20px;
`;

export const BudgetButton = styled.button`
  height: 36px;
  width: 85px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-right: 20px;
  cursor: pointer;
`;
