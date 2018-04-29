import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ToolBar.css';


const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <Link to='/'>AmbitionBox</Link>
        <Link to='/'>Home</Link>
        <Link to='/gitusers'>Git Users</Link>
    </header>
);
export default toolbar;