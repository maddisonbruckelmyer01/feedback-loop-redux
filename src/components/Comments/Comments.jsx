import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header'

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleClick = () => {
        let action = {
            type: 'SET_COMMENTS',
            payload: this.state.comments
        }
        this.props.dispatch(action)
        this.props.history.push('/review');
    }//end handleClick

    render() {
        return(
            <div>
                <Header />
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" placeholder="Place comments here" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Next</button>
            </div>

        )
    }
}

export default connect()(Comments);