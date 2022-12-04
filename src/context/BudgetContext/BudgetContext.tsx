import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProviderProps } from "./types";

export const budgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContext = () => useContext<IBudgetContext>(budgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (budget) => {
      setBudgetContext((ctx) => ({ ...ctx, budget }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <budgetContext.Provider value={useBudgetContextValue()}>{children}</budgetContext.Provider>
  );
};
