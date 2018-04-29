import React, { Component } from 'react';
import classes from './Home.css';
import Logo from '../../assets/Logo.jpg';


class Home extends Component {
    render() {
        
        return (
            <div className={classes.Content}>
                <img src={Logo} alt="Welcome"/>
                <h2 className={classes.Head}>AmbitionBox Github User Search Page</h2>
            </div>
        );
    }
}
export default Home;