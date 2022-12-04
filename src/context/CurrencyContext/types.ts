import { ReactNode } from "react";

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

enum Currency {
  USD = "$",
  EUR = "€",
  GBR = "£",
}

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

interface ICurrencyConext {
  currencies: ICurrency[];
  curentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}

export { Currency };
export type { ICurrency, ICurrencyConext };
