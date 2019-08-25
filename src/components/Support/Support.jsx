import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    state = {
        user: {
            support: 0
        }
    }

    handleChange = (event) => {
       this.setState({
           user: {
            support: event.target.value
           } 
       })
    }//end handleChange


    handleClick = () => {
        let action = {
            type: 'ADD_TO_STATE',
            payload: this.state.user
        }
        this.props.dispatch(action)
        this.props.history.push('/comments')
    }//end handleClick

    render() {
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <p>Support?</p>
                <input type="number" placeholder="scale of 1-10" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);