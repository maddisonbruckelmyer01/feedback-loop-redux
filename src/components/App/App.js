import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import {connect} from 'react-redux';
import axios from 'axios';


class App extends Component {
  componentDidMount = () => {
    this.getData();
  }// end componentDidMount

  getData = () => {
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
  }//end getData

  render() {
    return (
      <Router>
      <div className="App">
        
      <Route exact path='/' component={Feeling} />
      <Route path='/understanding' component={Understanding} />
      <Route path='/support' component={Support} />
      <Route path='/comments' component={Comments}/>
      <Route path='/review' component={Review}/>
      <Route path='/submit' component={Submit}/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
