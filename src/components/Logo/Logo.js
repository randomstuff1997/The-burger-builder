import React from 'react';

import burgerLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger-Builder" onClick={props.resetPage}/>
    </div>
)

export default Logo
