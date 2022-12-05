import { useForm, SubmitHandler } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgetContext";
import { useExpencesListContext } from "../../context/ExpencesListContext/ExpencesListContext";
import { Input, Title } from "../../GlobalStyles";
import { Button, FormStyled } from "./styles";

interface IExpence {
  name: string;
  cost: number;
}

export const Form = () => {
  const { setNewBudget } = useBudgetContext();
  const { curentExpencesList, setNewExpencesList } = useExpencesListContext();

  const { register, handleSubmit } = useForm<IExpence>();
  const { budget } = useBudgetContext();

  const onSubmit: SubmitHandler<IExpence> = (data) => {
    setNewBudget(budget - data.cost);
    setNewExpencesList(data);
    curentExpencesList.push(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <Input type="text" {...register("name")} placeholder="enter name ..." />
      <Input type="number" {...register("cost")} placeholder="enter cost ..." />
      <Button type="submit">Done</Button>
    </FormStyled>
  );
};
