import "./App.scss";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Artur",
    last: "Bango",
  };

  const nameList = [
    {
      first: "Artur",
      last: "Bango",
    },
    {
      first: "Inga",
      last: "Pahl",
    },
    {
      first: "Leone",
      last: "Cords",
    },
  ];

  return (
    <div className="App">
      <Greet name="Elis" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading >Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leone!</Heading>
      </Oscar>
      <Button handleClick={(event, id)=>{
        console.log('Button clicked', event, id);
      }}/>
    </div>
  );
}
//! 6-4:25
export default App;
