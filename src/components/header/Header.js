import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';
import Select from '../../components/select/Select';


class Header extends Component {
  render() {
    return (
    	<header>
	    	<div className="container-menu">   
	    		<Logo /> 
	    		<Select />    
	      	</div>
     	</header>
    );
  }
}

export default Header;
