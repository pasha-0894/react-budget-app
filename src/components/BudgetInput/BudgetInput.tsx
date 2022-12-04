import { BudgetButton } from "../../GlobalStyles";
import { BudgetInputStyled, Form, Input } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

interface IBudget {
  budget: number;
}

export const BudgetInput = () => {
  const { setNewBudget } = useBudgetContext();

  const { register, handleSubmit } = useForm<IBudget>();

  const onSubmit: SubmitHandler<IBudget> = (data) => {
    setNewBudget(data.budget);
  };
  return (
    <BudgetInputStyled>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="number" {...register("budget")} placeholder="Enter  budget ..." />
        <BudgetButton type="submit">Save</BudgetButton>
      </Form>
    </BudgetInputStyled>
  );
};
