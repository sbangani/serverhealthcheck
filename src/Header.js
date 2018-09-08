import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = (props) => (
  <Navbar inverse collapseOnSelect>
	  <Navbar.Header>
		<Navbar.Brand>
		  <a href="">{props.title}</a>
		</Navbar.Brand>
		<Navbar.Toggle />
	  </Navbar.Header>
	  <Navbar.Collapse>
		
		<Nav pullRight>
		 
		  <NavItem eventKey={1} href="#">
			Logout
		  </NavItem>
		</Nav>
	  </Navbar.Collapse>
	</Navbar>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export { Header };