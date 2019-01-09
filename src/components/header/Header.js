import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';

class Header extends Component {
  render() {
    return (
    	<header>
	    	<div className="container-menu">   
	    		<Logo />     
	      	</div>
     	</header>
    );
  }
}

export default Header;
