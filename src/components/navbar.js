import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <Navbar.Brand href="/" className="col-4">Aris</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#acerca">Acerca de </Nav.Link>
                    <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                    <Nav.Link href="#contactame">Contactame</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}