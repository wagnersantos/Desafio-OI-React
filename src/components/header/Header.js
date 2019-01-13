import React from 'react';
import Logo from '../../components/logo/Logo';
import Select from '../../components/select/Select';


const Header = (props) => (
    <header>
        <div className='grid'> 
                <div className="container-menu">   
    		        <Logo /> 
    		        <Select />    
                </div>
        </div>
    </header>
)

export default Header;
