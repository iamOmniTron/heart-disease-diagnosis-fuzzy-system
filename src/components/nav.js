import { Navbar,Container } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function NavBar(){

    return(
        <>
        <Navbar bg="light" expand="lg" variant="light" style={{height:"10vh"}}>
        <Container fluid>
          <Navbar.Brand className="ms-3 d-flex align-items-center">
            <Link to="/">
          <img src="/heart1.jpeg" width="50" height="40" alt="website logo" className="pe-2 d-inline-block align-top rounded"/>
            </Link>
            <div>
              <span className="fw-bold text-danger">E-Health</span>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-nav" />
            <Navbar.Collapse id="toggle-nav">
              <div className="ms-auto text-center me-4 d-flex gap-3" style={{width:"7s0%"}}>
                <Link to="/" className="text-light fw-bold text-dark me-4" style={{textDecoration:"none"}}>
                  Home
                </Link>
                <Link to="/about" className="text-light fw-bold text-dark" style={{textDecoration:"none"}}>
                  About
                </Link>
              </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}