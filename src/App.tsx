import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses";
import { Form } from "./components/Form";
import { Container } from "./GlobalStyles";

function App() {
  return (
    <Container>
      <Budget />
      <Expenses />
      <Form />
    </Container>
  );
}

export default App;
