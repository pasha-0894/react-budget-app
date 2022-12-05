import { useExpencesListContext } from "../../context/ExpencesListContext/ExpencesListContext";
import { ICurentExpencesList } from "../../context/ExpencesListContext/types";
import { Badge, Button, Item } from "./styles";
import { ReactComponent as Image } from "../../assets/images/ButtonRemove.svg";

export const ExpencesListItem = ({ name, cost }: ICurentExpencesList) => {
  const { curentExpences, curentExpencesList } = useExpencesListContext();

  const handleButton = () => {};

  return (
    <Item>
      <p>{name}</p>
      <Badge>
        <p>{cost}</p>
      </Badge>
      <Button onClick={handleButton}>
        <Image />
      </Button>
    </Item>
  );
};
