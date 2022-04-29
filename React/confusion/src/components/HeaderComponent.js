import React, {Component} from "react";
import {Navbar, Modal,ModalHeader,ModalBody,Nav,Form,FormGroup,Label, Input,Button,NavbarBrand,NavbarToggler,Collapse,NavItem} from "reactstrap";

import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state=
            {
                  isNavOpen:false,
                isModalOpen:false
            };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState(
            {isNavOpen:!this.state.isNavOpen}
        );
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogin(event){
        console.log('alert not showing up');
        alert("Username: " + this.username.value + "Password : "+ this.password.value + "Remember :" + this.remember.checked);
        event.preventDefault();
        this.toggleModal();


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
    <Nav className="ml-auto" navbar>
        <NavItem>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span>Login
            </Button>
        </NavItem>
    </Nav>
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
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="text" id="password" name="password" innerRef={ (input)=>this.password=input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="remember" innerRef={ (input)=>this.checked=input}></Input>
                            Remember me
                            </Label>

                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">Login</Button>
                    </Form>
                  </ModalBody>
              </Modal>
          </React.Fragment>
        );
    }
}
export default Header;