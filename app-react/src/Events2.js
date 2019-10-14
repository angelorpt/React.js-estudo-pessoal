import React, { Component } from 'react'

export default class Events2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            age : 0
        }
    }   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const {name, age} = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleChange} name="name" id="id" placeholder="Enter your name"/>
                <input type="text" onChange={this.handleChange} name="age"  id="age" placeholder="Enter your age"/>
                <button type="button">OK</button>
                <p>Nome: {name}</p>
                <p>Idade: {age}</p>
            </div>
        );
    }

} // [end class]