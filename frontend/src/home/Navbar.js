import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
    <div class="sp-container">
	<div class="sp-content">
		<div class="sp-globe"></div>
		<h2 class="frame-1">WELCOME</h2>
		<h2 class="frame-2">TO THE</h2>
		<h2 class="frame-3">BAD COMPANY</h2>
		<h2 class="frame-4">WEBSITE</h2>
		<h2 class="frame-5">
			<span>LETS,</span>
			<span>PLAY,</span>
			<span>POOL</span>
		</h2>
       </div>              
                         
                 
             </div>
            
             
            
             <Navbar color="faded" light expand="md"id="navbar">
                    <NavbarToggler onClick={this.toggle} />
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button className="logout" onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                </Navbar> </div>
);
  }
}
      


export default SiteBar;