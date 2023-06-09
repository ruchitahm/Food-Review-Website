import React, {Component} from "react";
import{Navbar,NavbarBrand,Nav, NavbarToggler,Collapse, NavItem, Jumbotron, Modal, ModalBody,Button, ModalHeader,Form, FormGroup, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            isNavOpen : false,
            isModalOpen: false,
            isModalSignUpOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        // debugger
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
  
      }
      favclicked(){
        const msg1 = document.getElementById("signupuser");
        console.log("****",msg1.innerHTML)
        msg1.classList.add("hide");
      }
      loginformclick(){
        // debugger
        const msg1 = document.getElementById("signupuser");
        console.log("****",msg1.innerHTML)
        msg1.classList.add("hide");
      }
      
      toggleModalSignUp() {
        this.setState({
            isModalSignUpOpen: !this.state.isModalSignUpOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        // alert("Username: " + this.username.value + " Password: " + this.password.value
        //     + " Remember: " + this.remember.checked);
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }
    handleSignUp(event) {
        this.toggleModal();
        this.toggleModalSignUp();
        // alert("Username: " + this.username.value + " Password: " + this.password.value
        //     + " FirstName: " + this.firstname.value + "Last Name: "+ this.lastname.value );
        this.props.signupUser({username: this.username.value, password: this.password.value, firstname: this.firstname.value,lastname: this.lastname.value});
        // alert("SignUp successfully!")
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
        const sign2 = document.getElementById("signupuser");
        sign2.classList.remove("hide");
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} /> 
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt='Marble Kitchen' ></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/favorites" onClick={this.favclicked}>
                                    <span className="fa fa-heart fa-lg"></span> My Favorites
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                            </Nav>

                            {/* <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav> */}
                            <Nav className="ml-auto" navbar>
                                {/* <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem> */}
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline onClick={this.toggleModal} id="loginuser">
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                        
                                    }
                                </NavItem>
                                <NavItem>
                                    {/* { !this.props.auth.isAuthenticated ? */}
                                    {/* <Button type="button" id="signupuser"class="signupuser btn btn-success" outline onClick={this.toggleModalSignUp}>
                                            <span className="fa fa-user-plus fa-lg"></span> Sign Up
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                    </Button> */}
                                        {/* : */}
                                        {/* <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div> */}
                                        
                                    {/* } */}
                                </NavItem>
                            </Nav>
                            
                            
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>Marble Kitchen</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} required/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} required/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" onClick={this.loginformclick}>Login</Button>
                            <Button type="button" id="signupuser"class="signupuser btn btn-success" outline onClick={this.toggleModalSignUp}>
                                            <span className="fa fa-user-plus fa-lg"></span> Sign Up
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                    </Button>
                            {/* { !this.props.auth.isAuthenticated ?
                                       <Button type="button" class="btn btn-success" outline onClick={this.toggleModalSignUp}>
                                       <span className="fa fa-user-plus fa-lg"></span> Sign Up
                                       {this.props.auth.isFetching ?
                                           <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                           : null
                                       }
                                     </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                        
                                    }
                             */}
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalSignUpOpen} toggle={this.toggleModalSignUp}>
                    <ModalHeader toggle={this.toggleModalSignUp}>Sign Up</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} required/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} required />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="firstname" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} required />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="lastname" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} required />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" >Sign Up </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;