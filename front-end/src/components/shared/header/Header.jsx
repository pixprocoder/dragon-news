import logo from "../../../assets/logo.png";
import Button from "react-bootstrap/Button";

export const Header = () => {
  return (
    <header className="text-center">
      <div>
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>Sunday, November 27, 2022</p>
      </div>
      {/* banner  */}
      <div className="bg-light d-flex p-2 align-items-center justify-content-center">
        <Button variant="danger">Latest</Button>
        <p className="ms-3 m-0">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </div>
      <nav className="mt-2">
        <span className="ms-2" href="">
          Home
        </span>
        <span className="ms-2" href="">
          About
        </span>
        <span className="ms-2" href="">
          Carrier
        </span>
      </nav>
    </header>
  );
};
