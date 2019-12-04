import React from 'react';

//const Followers = (props) => {
class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      followerData: {},
    };
  }

  followerCardsState = (index) => {
      const getFollowers = () => {
        fetch(`${this.props.statePropsFollowers[index].url}`)
          .then(response => response.json())
          .then(gitHubData => this.setState({followerData: gitHubData}))
          .catch(err => console.log('noooo'));
      };
      getFollowers();
  };// need to attache this to the life cycle
  // http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  render() {
    return (
      <>
      {this.props.statePropsFollowers.map(function(item, index ) {
        return (
          <>
          {() => this.followerCardsState(index)}
          {console.log(this.props.statePropsFollowers[index].url)}
          {console.log(this.state.followerData)}

          <div className="userCard w3-animate-zoom">
            <a href={item.html_url}>
              <h2>{item.login}</h2>
            </a>

            <img src={item.avatar_url} />
          </div>
          </>
        );
      }.bind( this )  )}{/*need to BIND(this) for it to have conexest in this map*/}
      </>
    );
  }
}

export default Followers;


/*
render() {
  return (
    <>
    {props.statePropsFollowers.map(function(item) {
        return (
          <div className="userCard w3-animate-zoom">
            <a href={item.html_url}>
              <h2>{item.login}</h2>
            </a>

            <img src={item.avatar_url} />
          </div>
        );
      }.bind( this )  )}
    </>
  );
);

*/
