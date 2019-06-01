import React from "react";
import "./App.css";
import { Home } from "./screens/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Country } from "./screens/Country";

const App: React.FC = () => {
  const basename = process.env.NODE_ENV === "production" ? "/country/" : "/";
  return (
    <Router basename={basename}>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-white" href={basename}>
          React Boostrap Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/country/:alias" component={Country} />
    </Router>
  );
};

export default App;
