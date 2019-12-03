import React from 'react';


import logo from './logo.svg';
import './App.scss';

import UserInfo from './Components/UserInfo';

//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitHubData: {}
    };
  }

  componentDidMount() {
    const gitHub = () => {
      fetch('https://api.github.com/users/newbi462')
        .then(response => response.json())
        .then(gitHubData => this.setState({gitHubData: gitHubData}))
        .catch(err => console.log('noooo'));
    };///seems to be an iffanate loop
    gitHub();
  }// breaks the loop to run once, WHAT WE CAN USE AXIOS? SCREW THIS

  render() {
    return (
      <>
      {}
      {console.log(this.state.gitHubData)}

      <div className="App">
        <header className="App-header">
          <UserInfo stateProps={this.state} />


{/*
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
*/}
        </header>
      </div>
{/*
      <Route
        path={`/${this.state.gitHubData.html_url}`}
        component={() => {
          window.location.href = {this.state.gitHubData.html_url};
          return null;
        }}
      />
*/}
      </>
    );
  }
}

export default App;
