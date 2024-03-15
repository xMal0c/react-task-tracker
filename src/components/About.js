import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h4 className="about-version">Version 1.0.0</h4>

      <Link className="about-version-back" to="/">
        Go Back
      </Link>
    </>
  );
};
