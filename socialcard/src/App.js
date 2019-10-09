//import React from 'react';
//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
      render() {
        return (
          <div className="App">
            <Header />
            <section className="App-main">
            <Post 

            nickname="David" 
            avatar={require('./components/Post/unite.jpg')}
            caption="Not a bad view" 
            image={require('./components/Post/nature.jpg')}/>

            </section>
            </div>
        );
      }
    }
export default App;








/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
