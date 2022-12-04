import { Title } from "../../GlobalStyles";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { BudgetHeaderStyled } from "./styles";

export const BudgetHeader = () => {
  return (
    <BudgetHeaderStyled>
      <Title>Budget App</Title>
      <CustomSelect />
    </BudgetHeaderStyled>
  );
};
