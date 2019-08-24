import React, { Component } from 'react';

class Feeling extends Component {
    
    handleClick = () => {
        this.props.history.push('/understanding')
    }//end handleClick

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <p>Feeling?</p>
                <input type="number" placeholder="scale of 1-10" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Feeling;