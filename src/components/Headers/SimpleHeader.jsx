import React from 'react';
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// reactstrap components
import { Navbar,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

class SimpleHeader extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        color:''
    }
    
  }

  render() {
    return (
      <>
        <div>
        <Navbar color="success" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>        
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
        </div>
      </>
    );
  }
}

export default SimpleHeader;
