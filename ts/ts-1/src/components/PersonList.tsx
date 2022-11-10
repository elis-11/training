type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {/* <h2>Artur Bango</h2>
        <h2>Inga Pahl</h2>
        <h2>Leon Cords</h2> */}
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
