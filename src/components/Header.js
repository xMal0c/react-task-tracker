import { Button } from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
  let text = showAdd ? "Close" : "Add +";
  let color = showAdd ? "#fc5b5b" : "black";

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={color} text={text} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};
