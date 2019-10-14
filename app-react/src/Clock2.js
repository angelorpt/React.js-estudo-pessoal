import React, { Component } from 'react';

class Clock2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            time: new Date()
                        .toLocaleString('en-US', {
                            hour   : 'numeric',
                            minute : 'numeric',
                            second : 'numeric',
                            hour12 : true
                        }),
            name: 'Angelo'
        }
    }    

    componentDidMount(){
        this.timer = setInterval(() => {this.updateClock()}, 1000);
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    updateClock(){
        this.setState({
            time: new Date()
                        .toLocaleString('en-US', {
                            hour   : 'numeric',
                            minute : 'numeric',
                            second : 'numeric',
                            hour12 : true
                        }),
            name: 'Angelo2'
        });
    }

    render() {
        const {time, name} =  this.state;
        return(
            <div>
                <h1>
                    {time}
                </h1>
                <p>{name}</p>
            </div>
        );
    }
}

export default Clock2;