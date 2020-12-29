import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <Navbar.Brand href="/" className="col-4">Aris</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/Acerca de">Acerca de </Nav.Link>
                    <Nav.Link href="/Proyectos">Proyectos</Nav.Link>
                    <Nav.Link href="/Contactame">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}