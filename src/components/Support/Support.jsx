import React, { Component } from 'react';

class Support extends Component {

    handleClick = () => {
        this.props.history.push('/comments')
    }//end handleClick

    render() {
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <p>Support?</p>
                <input type="number" placeholder="scale of 1-10" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Support;