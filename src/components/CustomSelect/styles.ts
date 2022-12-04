import { StylesConfig } from "react-select";
import { ICurrency } from "../../context/CurrencyContext/types";

export const styles: StylesConfig<ICurrency> = {
  control: (baseStyles) => ({
    ...baseStyles,
    boxSizing: "border-box",
    width: "100px",
    height: "30px",
    background: "#FFFFFF",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "15px",
    color: "#000000",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    width: "40px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "15px",
    color: "#000000",
  }),
};
