import styled from "styled-components";

export const Item = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 6fr 1fr 1fr;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ccd5ff;
  align-items: center;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 20px;
  }
`;

export const Badge = styled.div`
  width: 56px;
  height: 21px;
  background: #23c9ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    margin: 0;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 14px;
  width: 15px;
`;
