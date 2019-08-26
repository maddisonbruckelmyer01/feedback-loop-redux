import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from '../Header/Header'

class Review extends Component {
    
    handleClick = () => {
        axios.post('/feedback', this.props.input)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert('error submitting responses');
                console.log(error);
            })

        this.props.history.push('/submit')
    }//end handleClick

    render() {
        return (
            <div>
                <Header />
                <h1>Review your feedback!</h1>
                <ul>
                    <li>Feelings: {this.props.input.feeling}</li>
                    <li>Understanding: {this.props.input.understanding}</li>
                    <li>Support: {this.props.input.support}</li>
                    <li>Comments: {this.props.input.comments}</li>
                </ul>
                <button onClick={this.handleClick}>Submit</button>
            </div>

        )
    }
}

const toProps = (reduxStore) => {
    return {
        input: reduxStore.inputReducer
    }
}

export default connect(toProps)(Review);