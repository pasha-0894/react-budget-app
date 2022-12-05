import { createContext, useContext, useState } from "react";
import {
  IExpencesListContext,
  ICurentExpencesList,
  IExpencesListContextProviderProps,
} from "./types";
import { v4 as uuidv4 } from "uuid";

export const expencesListContext = createContext<IExpencesListContext>({} as IExpencesListContext);

export const useExpencesListContext = () => useContext<IExpencesListContext>(expencesListContext);

const useExpencesListContextValue = () => {
  const [expencesListContext, setExpencesListContext] = useState<IExpencesListContext>(() => ({
    curentExpences: {
      id: null,
      name: null,
      cost: null,
    },
    curentExpencesList: [],
    setNewExpencesList: (curentExpences: ICurentExpencesList) => {
      curentExpences.id = uuidv4();
      setExpencesListContext((ctx) => ({ ...ctx, curentExpences }));
    },
  }));

  return expencesListContext;
};

export const ExpencesListContextProvider = ({ children }: IExpencesListContextProviderProps) => {
  return (
    <expencesListContext.Provider value={useExpencesListContextValue()}>
      {children}
    </expencesListContext.Provider>
  );
};
