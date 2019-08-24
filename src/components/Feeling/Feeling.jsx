import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0,
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }//end handleChange
    
    handleClick = () => {
        let action = { 
            type: 'ADD_TO_STATE',
            payload: this.state
        }
        this.props.dispatch(action)
        this.props.history.push('/understanding')
    }//end handleClick

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <p>Feeling?</p>
                <input type="number" placeholder="scale of 1-10" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);