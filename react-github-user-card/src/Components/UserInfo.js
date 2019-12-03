import React from 'react';

//class UserInfo extends React.Component {
const UserInfo = (props) => {

  return (
    <>
    <div className="userCard">
      <a href={props.stateProps.gitHubData.html_url}>
        <h2>{props.stateProps.gitHubData.login}</h2>
      </a>
      <img src={props.stateProps.gitHubData.avatar_url} />

      <ul>
        <li>name: {props.stateProps.gitHubData.name}</li>
        <li>location: {props.stateProps.gitHubData.location}</li>
        <li>followers: {props.stateProps.gitHubData.followers}</li>
      </ul>
    </div>
    </>
  );
}

export default UserInfo;
