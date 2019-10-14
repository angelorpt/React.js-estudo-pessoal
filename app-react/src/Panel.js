import React, {Component} from 'react'

class Panel extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { bordercolor, headercolor, headertext, data } = this.props;
        return (
            <div className="panel" style={{ width: '500px', height: '100px', position: 'relative', border: `1px solid ${bordercolor}` }}>
                <div className="panel-head" style={{ width: '100%', height: '50px', background: headercolor }}>
                    { headertext }
                </div>
                <div className="panel-body">
                    { data }
                </div>
            </div>
        );
    }
}

export default Panel;