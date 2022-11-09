import "./App.css";
import { Button } from "./styledComp/Button";
import { Card } from "./styledComp/Card";

function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button bgColor="red">1</Button>
      <Button bgColor="#ccc">2</Button>
      <Button bgColor="rgba(128, 128, 128)">3</Button>
      <Button bgColor="#e3d5ca">4</Button>
      <Button bgColor="#faedcd">5</Button>
      <Button bgColor="#f5ebe0"><div>naaa?</div></Button>
      <Button variant="secondary">Tschüß</Button>
        <Card>Card</Card>
    </div>
  );
}

export default App;
