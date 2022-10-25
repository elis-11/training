import { Card } from "./Card";

export const Actions = () => {
  return (
      <div className="flex justify-between">
      <Card number={1} />
      <Card number={2} />
      <Card number={5} />
      <Card number={10} />
    </div>

  );
};
