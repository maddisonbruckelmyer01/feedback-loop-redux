import React, { Component } from 'react';
import {connect} from 'react-redux';

class Review extends Component {
    
    handleClick = () => {
        this.props.history.push('/submit')
    }//end handleClick

    render() {
        let userFeedback = this.props.reduxStore.feedbackReducer.map((user, index) => {
            return (<li key={index}>Feelings: {user.feeling} Understanding: {user.understanding} Support: {user.support} Comments: {user.comments}</li>)
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

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);