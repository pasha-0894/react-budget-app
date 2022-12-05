import { ReactNode } from "react";

export interface ICurentExpencesList {
  id?: string | null;
  name: string | null;
  cost: number | null;
}

export interface IExpencesListContext {
  curentExpences: ICurentExpencesList;
  curentExpencesList: ICurentExpencesList[];
  setNewExpencesList: (option: ICurentExpencesList) => void;
}

export interface IExpencesListContextProviderProps {
  children: ReactNode;
}
