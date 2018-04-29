import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import GitUsers from './containers/GitUsers/GitUsers';
import Layout from './hoc/Layout/Layout';
class App extends Component {
    render(){
        return(
            <div>
                <Layout>
                    <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/gitusers' component={GitUsers}/>
                    </Switch>
                </Layout>
                
            </div>
        );
    }
}

export default App;