import React from 'react';


import logo from './logo.svg';
import './App.scss';

import UserInfo from './Components/UserInfo';
import Followers from './Components/Followers';

//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitHubData: {},
      followers: [],
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gitHubData !== this.state.gitHubData) {
      const getFollowers = () => {
        fetch(`${this.state.gitHubData.followers_url}`)
          .then(response => response.json())
          .then(gitHubData => this.setState({followers: gitHubData}))
          .catch(err => console.log('noooo'));
      };
      getFollowers();
    }
  }

  render() {
    return (
      <>
      {}
      {console.log(this.state.gitHubData)}
      {console.log(this.state.followers)}

      <div className="App">
        <header className="App-header">
          <UserInfo stateProps={this.state} />
          <Followers statePropsFollowers={this.state.followers} />
        </header>
      </div>
      </>
    );
  }
}

export default App;
