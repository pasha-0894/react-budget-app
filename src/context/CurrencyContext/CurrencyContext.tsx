import { createContext, useContext, useState } from "react";
import { Currency, ICurrencyConext, ICurrencyContextProviderProps } from "./types";

export const currencyContext = createContext<ICurrencyConext>({} as ICurrencyConext);

export const useCurrencyContext = () => useContext<ICurrencyConext>(currencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyConext>(() => ({
    curentCurrency: {
      label: "USD",
      value: Currency.USD,
    },
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
    ],
    setNewCurrency: (curentCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, curentCurrency }));
    },
  }));
  return currencyContext;
};

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <currencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </currencyContext.Provider>
  );
};
