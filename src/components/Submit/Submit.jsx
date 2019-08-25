import React, { Component } from 'react';
import {connect} from 'react-redux';


class Submit extends Component {

    handleClick = () => {
        
        this.props.history.push('/');
    }//end handleClick

    render() {
        return(
            <div>
                <h1>Submitted!</h1>
                <h1>Thank you!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}



export default connect()(Submit);