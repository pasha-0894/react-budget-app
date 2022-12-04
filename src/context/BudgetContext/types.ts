import { ReactNode } from "react";

export interface IBudgetContext {
  budget: number;
  setNewBudget: (option: number) => void;
}

export interface IBudgetContextProviderProps {
  children: ReactNode;
}
