import { Card } from "./Card";

export const Actions = () => {
  return (
    <div className="flex justify-between">
      <Card counter={1} />
      <Card counter={2} />
      <Card counter={5} />
      <Card counter={10} />
    </div>
  );
};
