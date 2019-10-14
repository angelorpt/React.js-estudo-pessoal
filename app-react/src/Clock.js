import React, { Component } from 'react';

class Clock extends Component {
    render() {
        const returnClock = function() {
            var hora =  new Date()
                    .toLocaleString('en-US', {
                        hour   : 'numeric',
                        minute : 'numeric',
                        hour12 : true
                    });
            return hora;
        }
        const color = 'red';
        return(
            <h1 className={color}>
                {returnClock()}
            </h1>
        );
    }
}

export default Clock;