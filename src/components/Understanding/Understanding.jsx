import React, { Component } from 'react';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/support')
    }//end handleClick  

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <p>Understanding?</p>
                <input type="number" placeholder="scale of 1-10" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Understanding;