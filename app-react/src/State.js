import React, {Component} from 'react'

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome      : 'Angelo',
            sobrenome : 'Rafael'
        };
    }

    render(){
        const { nome, sobrenome } = this.state;
        return(
            <div>
                <p>State</p>
                <p>{nome}</p>
                <p>{sobrenome}</p>
            </div>
        );
    }
}

export default State;