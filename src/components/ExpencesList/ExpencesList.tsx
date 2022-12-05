import { useExpencesListContext } from "../../context/ExpencesListContext/ExpencesListContext";
import { ExpencesListItem } from "../ExpencesListItem";
import { ExpencesListItemStyled, Table } from "./styles";

export const ExpencesList = () => {
  const { curentExpencesList } = useExpencesListContext();

  return (
    <Table>
      {curentExpencesList.map((item) => {
        return (
          <ExpencesListItemStyled key={item.id}>
            <ExpencesListItem name={item.name} cost={item.cost} />
          </ExpencesListItemStyled>
        );
      })}
    </Table>
  );
};
