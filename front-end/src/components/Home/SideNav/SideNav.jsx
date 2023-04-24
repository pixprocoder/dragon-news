import Button from "react-bootstrap/Button";
import { BsGoogle, BsGithub } from "react-icons/bs";
import SocialMedia from "../../shared/SocialMedia/SocialMedia";
const SideNav = () => {
  return (
    <section>
      <h3>Login With</h3>
      <div className="d-grid gap-2">
        <Button
          className="d-flex gap-2 justify-content-center align-items-center"
          variant="outline-primary"
          size="lg"
        >
          <BsGoogle />
          <span>Continue with Google</span>
        </Button>
        <Button
          className="d-flex gap-2 justify-content-center align-items-center"
          variant="outline-primary"
          size="lg"
        >
          <BsGithub />
          <span>Continue with GitHub</span>
        </Button>
      </div>
      <h3 className="my-2">Find Us on</h3>
      <SocialMedia />
    </section>
  );
};

export default SideNav;
