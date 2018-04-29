import React, { Component } from 'react';
import classes from './GitUser.css';

class GitUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: true,
            name: "",
            followers: 0,
        }
    }

    componentDidMount() {
        fetch(this.props.url).then(res => res.json())
            .then(({ name, followers }) => this.setState({ name, followers, loading: false }))
            .catch((err) => { console.log(err); this.setState({ error: true }) });
    }
    render() {
        const { login, avatar_url } = this.props;
        const { loading, error, name, followers } = this.state;
        if (this.state.loading) {
            return <div>Loading ...</div>
        }
        if (error) {
            return <div>Error loading</div>
        }
        return (
            <div className={classes.Content}>
               
                <div className={classes.GitUser}>
                    <img src={avatar_url} />

                    <div >                   
                        <p >{login}</p>
                        <p >{name}</p>
                   </div>
                </div>
                <div className={classes.Flow}>
                
                    <p> &hearts;
                        <span>{followers}</span>
                    </p>
                </div>
                


            </div>

        );

    }

}

export default GitUser;