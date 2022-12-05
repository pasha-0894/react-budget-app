import { Input } from "../../GlobalStyles";

interface ISearch {
  name: string;
}

export const Search = () => {
  return (
    <form>
      <Input type="search" placeholder="search ..." />
    </form>
  );
};
