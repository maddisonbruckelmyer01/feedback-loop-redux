import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
            understanding: 0
    }

    handleChange = (event) => {
        this.setState({
                understanding: Number(event.target.value)
            
        })
    }//end handleChange

    handleClick = (event) => {
        event.preventDefault();
        let action = {
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        }
        this.props.dispatch(action)

        this.props.history.push('/support')
    }//end handleClick  

    render() {
        return(
            <div>
                <Header />
                <h1>How well are you understanding the content?</h1>
                <p>Understanding?</p>
                <form onSubmit={this.handleClick}>
                    <input type="number" placeholder="scale of 1-10" required onChange={this.handleChange} />
                    <input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}

export default connect()(Understanding);