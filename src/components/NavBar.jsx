import { Container, Nav, Navbar } from "react-bootstrap";
export const NavBar = ({ currentPage, pageSetter }) => {
    const linkMap = ["Landing", "Counter"];

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        CRA Boilerplate
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {linkMap.map((link) => {
                            return (
                                <Nav.Link
                                    active={link === currentPage}
                                    onClick={() => pageSetter(link)}
                                >
                                    {link}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};