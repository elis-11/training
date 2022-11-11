import "./App.css";
import { Button } from "./styledComp/Button";
import { Card } from "./styledComp/Card";

function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button bgColor="red">red</Button>
      <Button bgColor="#ccc">#ccc</Button>
      <Button bgColor="rgb(128, 128, 128)">rgb(128, 128, 128)</Button>
      <Button bgColor="#e3d5ca">#e3d5ca</Button>
      <Button bgColor="#faedcd">#faedcd</Button>
      <Button bgColor="#f5ebe0"><div>#f5ebe0</div></Button>
      <Button variant="secondary">Tschüß</Button>
        <Card>Card</Card>
    </div>
  );
}

export default App;
