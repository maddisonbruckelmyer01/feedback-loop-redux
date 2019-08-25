import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

    state = {
        user: {
            understanding: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            user: {
                understanding: event.target.value
            }
        })
    }//end handleChange

    handleClick = () => {
        let action = {
            type: 'ADD_TO_STATE',
            payload: this.state.user
        }
        this.props.dispatch(action)

        this.props.history.push('/support')
    }//end handleClick  

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <p>Understanding?</p>
                <input type="number" placeholder="scale of 1-10" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);