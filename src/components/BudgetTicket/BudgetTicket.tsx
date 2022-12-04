import React from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { BudgetButton, TicketTitle } from "../../GlobalStyles";
import { BudgetTicketStyled } from "./styles";

export const BudgetTicket = () => {
  const { budget, setNewBudget } = useBudgetContext();
  const handleClick = () => {
    setNewBudget(0);
  };
  return (
    <BudgetTicketStyled>
      <TicketTitle>Budget: {budget}</TicketTitle>
      <BudgetButton onClick={handleClick}>Edit</BudgetButton>
    </BudgetTicketStyled>
  );
};
