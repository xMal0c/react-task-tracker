import { Button } from "./Button";

export const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="black" text="Add +" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};
