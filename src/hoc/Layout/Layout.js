import React, {Component} from 'react';
import classes from './Layout.css';
import ToolBar from '../../components/ToolBar/ToolBar';

class Layout extends Component{


    render(){
        return(
            <div>
                <ToolBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </div>
        );
    }
}
export default Layout;