import React, {Component} from "react";
import {Navbar, Container,Nav,Form,FormText,Label, Input,DropdownMenu,DropdownItem,Button,NavbarBrand,NavbarToggler,Collapse,NavItem,UncontrolledDropdown,DropdownToggle} from "reactstrap";

import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state=
            {
              isNavOpen:false
            };
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState(
            {isNavOpen:!this.state.isNavOpen}
        );
    }
    render (){
        return (
          <React.Fragment>
              <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand className="mr-auto" href="/">
      <img src='assets/images/logo.png' heigh="30" width="41" alt="ristorante "/>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbar
      >
        <NavItem>
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/aboutus">
            About us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/menu">
            Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/contactus">
            Contact us
          </NavLink>
        </NavItem>
      </Nav>
        <Form className="d-flex">
        <Label for="search">
    </Label>
    <Input id="examplesearch"
        name="search"
        placeholder="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

    </Collapse>
  </Navbar>




              <div className="container jumbotron">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6">
                          <h1>Ristorante con fusion</h1>
                          <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickler your culinary senses!
                          </p>
                      </div>
                  </div>
              </div>
          </React.Fragment>
        );
    }
}
export default Header;