import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';

class App extends Component {

  componentDidMount = () => {

  }//end componentDidMount

  getData = () => {
    axios.get('')
  }//end getData
  
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
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

export default App;
