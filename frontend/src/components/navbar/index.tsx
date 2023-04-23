import { Navbar } from "react-bootstrap";

export default function NavbarComponet() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src="/assets/logo-paytour.svg"
            className="d-inline-block  align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }