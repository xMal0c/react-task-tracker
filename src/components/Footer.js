import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p className="under-clouds">
        Copyright &copy; {new Date().getFullYear()}
      </p>
      <Link className="to-about" to="/about">
        About
      </Link>
    </footer>
  );
};
