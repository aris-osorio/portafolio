import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <Navbar.Brand href="/" className="col-4">Aris</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="col-6 d-flex justify-content-between">
                    <li className="nav-item">
                        <Link activeClass="active" to="inicio"  smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="acerca"  smooth={true} duration={500}>
                            Acerca de
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="proyectos" smooth={true} duration={500}>
                            Proyectos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="contactame" smooth={true} duration={500}>
                            Contactame
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}