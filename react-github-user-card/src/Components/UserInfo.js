import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

//class UserInfo extends React.Component {
const UserInfo = (props) => {

  return (
    <>
    <div className="userCard">
      <Link to={props.stateProps.gitHubData.html_url}><h2>{props.stateProps.gitHubData.login}</h2></Link>
      <img src={props.stateProps.gitHubData.avatar_url} />

      <ul>
        <li>name: {props.stateProps.gitHubData.name}</li>
        <li>location: {props.stateProps.gitHubData.location}</li>
        <li>followers: {props.stateProps.gitHubData.followers}</li>
      </ul>


    </div>
{/* Dustin claims Route woks the same but sill geting a THIS natuer wrror due to app useing Class instead of HOOKS
    <Route
      path={`/${props.stateProps.gitHubData.html_url}`}
      component={() => {
        window.location.href = {props.stateProps.gitHubData.html_url};
        return null;
      }}
    />
*/}
    </>
  );
}

export default UserInfo;
