import { Budget } from "./components/Budget/Budget";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { Form } from "./components/Form";
import { Container } from "./GlobalStyles";

function App() {
  return (
    <Container>
      <Budget />
      <Form />
    </Container>
  );
}

export default App;
