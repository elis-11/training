import { Card } from "./Card";

export const Actions = ({countBooks}) => {
  return (
      <div className="flex justify-between">
      <Card countBooks={countBooks} number={1} />
      <Card countBooks={countBooks} number={2} />
      <Card countBooks={countBooks} number={5} />
      <Card countBooks={countBooks} number={10} />
    </div>

  );
};
