import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {
    
    handleClick = () => {
        axios.post('/feedback', this.props.reduxStore.inputReducer)
            .then(response => {
                axios.get('/feedback')
                    .then(response => {
                        console.log(response)
                        this.props.dispatch({
                            type: 'GET_FEEDBACK',
                            payload: response.data
                        })
                    }).catch(error => {
                        console.log(error)
                    })
            }).catch(error => {
                console.log('error on post ', error);
            })

        this.props.history.push('/submit')
    }//end handleClick

    render() {
        let userFeedback = this.props.reduxStore.feedbackReducer.map((user, index) => {
            return (<li key={index}>Feelings: {user.feeling} Understanding: {user.understanding}
             Support: {user.support} Comments: {user.comments}</li>)
        })
        return (
            <div>
                <h1>Review your feedback!</h1>
                <ul>
                   {userFeedback}
                </ul>
                <button onClick={this.handleClick}>Submit</button>
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Review);