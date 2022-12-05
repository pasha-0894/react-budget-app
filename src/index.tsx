import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext";
import { ExpencesListContextProvider } from "./context/ExpencesListContext/ExpencesListContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ExpencesListContextProvider>
    <BudgetContextProvider>
      <CurrencyContextProvider>
        <App />
      </CurrencyContextProvider>
    </BudgetContextProvider>
  </ExpencesListContextProvider>,
);
