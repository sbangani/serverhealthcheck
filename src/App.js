import React, { Component } from 'react';
import { Header } from './Header';
import { ServerMonitor } from './ServerMonitor/ServerMonitor';
import './App.css';

class App extends Component {

	
  render() {
    return (
      <div>
		<div className="App">
        	<Header title='Server Monitor Health Check' />
		</div>
        <div className="mt-md-5 mx-md-5">
         <ServerMonitor/>
        </div>
    </div>
    );
  }
	
//	render() {
//    return (
//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React Yes</h2>
//        </div>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
}

export default App;
