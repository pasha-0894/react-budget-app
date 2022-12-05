import React from "react";
import { TicketTitle, Title } from "../../GlobalStyles";
import { ExpencesList } from "../ExpencesList";
import { Search } from "../Search";
import { ExpensesStyled } from "./styles";

export const Expenses = () => {
  return (
    <ExpensesStyled>
      <Title>Expenses</Title>
      <Search />
      <ExpencesList></ExpencesList>
    </ExpensesStyled>
  );
};
