import React from 'react';
import logo from './logo.svg';
import './App.scss';


//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitHubData: ""
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
  }// breaks the loop to run once

  render() {
    return (
      <>
      {}
      {console.log(this.state.gitHubData)}
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
      </>
    );
  }
}

export default App;
