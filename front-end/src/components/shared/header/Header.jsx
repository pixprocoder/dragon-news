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
      <div className="bg-light d-flex p-2 align-items-center justify-content-between">
        <Button variant="danger">Latest</Button>
        <p className=" m-0 flex-grow-1 text-center">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </div>
      <nav className="mt-2 d-flex justify-content-between">
        <div className="flex-grow-1 text-center">
          <span className="ms-2" href="">
            Home
          </span>
          <span className="ms-2" href="">
            About
          </span>
          <span className="ms-2" href="">
            Carrier
          </span>
        </div>
        <div>
          <Button variant="danger">Latest</Button>
        </div>
      </nav>
    </header>
  );
};
