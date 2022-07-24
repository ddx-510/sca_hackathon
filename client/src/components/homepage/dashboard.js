import { Button, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { streamUrl } from '../../utilities/url';
export let dashboard = (onLogout, temperature, humidity) => {
    return <div id="viewport">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"/>
        <div id="sidebar">
            <header>
                <a href="#">My App</a>
            </header>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home"><i class="zmdi zmdi-view-dashboard"></i> Dashboard</Nav.Link>
            <Nav.Link eventKey="link-1"><i class="zmdi zmdi-info-outline"></i> About</Nav.Link>
            <Nav.Link eventKey="link-2"> <i class="zmdi zmdi-link"></i> Shortcuts</Nav.Link>
            <Nav.Link eventKey="disabled" disabled><i class="zmdi zmdi-calendar"></i> Events</Nav.Link>
            </Nav>
        </div>
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button variant="outline-danger" onClick={onLogout}>
                    Log out
                    </Button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid>
            <Row>
                {temperature}
            </Row>
            <Row>
                {humidity}
            </Row>
        </Container>
    </div>

}