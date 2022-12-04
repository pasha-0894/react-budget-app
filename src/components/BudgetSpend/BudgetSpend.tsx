import { TicketTitle } from "../../GlobalStyles";
import { BudgetSpendStyled } from "./styles";

export const BudgetSpend = () => {
  const spend = 1000;
  return (
    <BudgetSpendStyled>
      <TicketTitle>Spent so far: {spend}</TicketTitle>
    </BudgetSpendStyled>
  );
};
