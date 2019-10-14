import React, { Component } from 'react'

export default class Events2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            name  : '',
            lista : []
        }
    }   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    insertToData = () => {
        const arr = this.state.lista;
        arr.push(this.state.name);
        this.setState({
            name  : '',
            lista : arr
        });
        console.log(this.state);
    }

    render(){
        const {name, lista} = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleChange} name="name" id="id" placeholder="Enter your name"/>
                <button type="button" onClick={this.insertToData}>OK</button>
                <p>Nome : {name}</p>
                <ul>
                    { 
                        lista.map(item => {
                            return (
                                <li key={item}>{item}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

} // [end class]