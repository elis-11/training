type GreetProps = {
  name: string;
  age?: number;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name} ${props.age} ! You have ${messageCount} unread messages`
          : `Welcome Guest!`}
      </h2>
    </div>
  );
};
