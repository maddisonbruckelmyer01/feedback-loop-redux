import React, { Component } from 'react';

class Review extends Component {
    
    handleClick = () => {
        this.props.history.push('/submit')
    }//end handleClick

    render() {
        return (
            <div>
                <h1>Review your feedback!</h1>
                <button onClick={this.handleClick}>Submit</button>
            </div>

        )
    }
}

export default Review;