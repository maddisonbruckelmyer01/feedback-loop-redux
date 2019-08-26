import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Feeling extends Component {

  state = {
      feeing: 0
  }
    

    handleChange = (event) => {
        this.setState({
            feeling: Number(event.target.value)
        })
    }//end handleChange
    
    handleClick = (event) => {
        event.preventDefault()
        let action = { 
            type: 'SET_FEELING',
            payload: this.state.feeling
        }
        this.props.dispatch(action)
        this.props.history.push('/understanding')
    }//end handleClick

    
    render() {
        console.log(this.state)
        return (
            <div>
                <Header />
                <h1>How are you feeling today?</h1>
                <p>Feeling?</p>
                <form onSubmit={this.handleClick}>
                    <input type="number" placeholder="scale of 1-10" required onChange={this.handleChange}/>
                    <input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}


export default connect()(Feeling);