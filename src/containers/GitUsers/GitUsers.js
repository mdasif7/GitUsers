import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import GitUser from './GitUser';
import classes from './GitUsers.css';

class GitUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:1,
        }
        this.page = 1;
        this.loadMore = this.loadMore.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
           this.fetchData();
    }
    fetchData(page=1){
        fetch(`https://api.github.com/search/users?q=+location:india+language:javascript&page=${page}&sort=followers`)
        .then((response)=>response.json())
        .then((res=>
        {
            console.log("YO",res);
            this.props.onGitusers(res);
            
        }) 
    )}
    loadMore(){
        console.log("previous state", this.state.page);
        this.setState((prevState) => {return {page: prevState.page + 1}});
        console.log("previous state", this.state.page);
        this.fetchData(++this.page);
    }
    render() { 
        console.log("ff",this.props.users)      
        return (
            <div>
                <h2>Git user Pages</h2>
                <div className={classes.GitUsers}>
                {this.props.users.map((item,index) => <GitUser {...item} key={index}/>)}
                </div>
                <div className={classes.Div}><button className={classes.Button} onClick={this.loadMore}>Load More</button></div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGitusers: (res) => (dispatch(actions.onGitusers(res))),
      
    };
};
const mapStateToProps = state => {
    
    return {
        users:state.users,
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(GitUsers);