import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { BudgetHeader } from "../BudgetHeader/BudgetHeader";
import { BudgetInput } from "../BudgetInput/BudgetInput";
import { BudgetSpend } from "../BudgetSpend";
import { BudgetTicket } from "../BudgetTicket/BudgetTicket";
import { BudgetStyled } from "./styles";

export const Budget = () => {
  const { budget } = useBudgetContext();
  let ticket;
  if (budget > 0) {
    ticket = <BudgetTicket />;
  } else {
    ticket = <BudgetInput />;
  }
  return (
    <BudgetStyled>
      <BudgetHeader />
      {ticket}
      <BudgetSpend />
    </BudgetStyled>
  );
};
