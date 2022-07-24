import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  Container,
  Row,
  Button
} from "react-bootstrap";

import { repeatListen } from "../../api";
import { streamUrl } from "../../utilities/url";

const dashboard = (onLogout, temperature, humidity) => {
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
                temperature: {temperature}
            </Row>
            <Row>
                humidity: {humidity}
            </Row>
            <img src={streamUrl}/>
        </Container>
      <Container fluid>
      </Container>
  </div>
}

function Homepage({ onLogout }) {
  const [temp, setTemp] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setTemp((prevTemp)=>prevTemp+1)
    }, 3000)
  }, [])

  useEffect(()=>{
    let result = repeatListen().then(
      (response) => {
        setTemperature(response.temperature);
        setHumidity(response.humidity);
        console.log(temperature, humidity);
      }
    )
  }, [temp])

  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  return dashboard(onLogout, temperature, humidity);
}


export default Homepage;
