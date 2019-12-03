import React from 'react';

const Followers = (props) => {

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
      })}
    </>
  );
}

export default Followers;
