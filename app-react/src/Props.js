import React, { Component } from 'react';
import Panel from './Panel';

class Props extends Component {

    // Construtor da Classe
    constructor(props) {
        super(props);

        // this.props.attr;
        // this.props.attr2;
        // this.props.attr3;

        // Destructor
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);
    }

    
    // Metodo de render HTML
    render() {
        
        const { attr, attr2, attr3 } = this.props;

        return (
            <div>
                <p>PROPS</p>
                <table border='1'>
                    <tr>
                        <td>{attr}</td>
                        <td>{attr2}</td>
                        <td>{attr3}</td>
                    </tr>
                </table>
                <Panel bordercolor="blue" headercolor="red" headertext="This is a header" data="School of Net" />
                <Panel bordercolor="gray" headercolor="purple" headertext="This is a header" data="School of Net" />
            </div>
        );
    }

} // [END CLASS]

export default Props;