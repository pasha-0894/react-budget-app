import { createContext, useContext, useState } from "react";
import { IExpencesListContext } from "./types";

export const expencesListContext = createContext<IExpencesListContext>(
  {} as typeof ExpencesListContext,
);

export const useCurrencyContext = () => useContext<IExpencesListContext>(expencesListContext);

export const ExpencesListContext = () => {
  return <div>ExpencesListContext</div>;
};
