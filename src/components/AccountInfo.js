import React, { Component } from "react";
import useToken from './useToken';

function Token(){
    const token = useToken().token;
    return token;
}

export default class AccountInfo extends Component{
    state = {
        id: null,
        name: null,
        email: null,
        roleName: null,
        token: Token()
    }
    
    componentDidMount(){
        fetch('https://localhost:9001/account/info?token='+this.state.token)
        .then((response) => response.json())
        .then(
            (response) => {
                this.setState({
                    id: response.id,
                    name: response.name,
                    email: response.email,
                    roleName: response.roleName,
                });
            }
        )
    }

    render(){
        return(
            <a className="nav-link" href="/Login">
            {
            this.state.id
            }
            </a>
        )
    }
}