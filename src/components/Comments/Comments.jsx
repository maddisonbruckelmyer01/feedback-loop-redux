import React, { Component } from 'react';

class Comments extends Component {

    handleClick = () => {
        this.props.history.push('/review');
    }//end handleClick

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" placeholder="Place comments here"/>
                <button onClick={this.handleClick}>Next</button>
            </div>

        )
    }
}

export default Comments;