import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Support extends Component {

    state = {
            support: 0
    }

    handleChange = (event) => {
       this.setState({
          support: Number(event.target.value)
       })
    }//end handleChange


    handleClick = (event) => {
        event.preventDefault();
        let action = {
            type: 'SET_SUPPORT',
            payload: this.state.support
        }
        this.props.dispatch(action)
        this.props.history.push('/comments')
    }//end handleClick

    render() {
        return(
            <div>
                <Header />
                <h1>How well are you being supported?</h1>
                <p>Support?</p>
                <form onSubmit={this.handleClick}>
                    <input type="number" placeholder="scale of 1-10" onChange={this.handleChange} />
                    <input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}

export default connect()(Support);