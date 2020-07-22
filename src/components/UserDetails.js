import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserBio from "./UserBio";
const UserDiv = styled.div`
  display: flex;
  align-self: flex-start;
  height: auto;
  margin: 1vmin 0;
  img {
    width: 10vmin;
    height: 10vmin;
    min-width: 50px;
    min-height: 50px;
  }
  .avatarDiv {
    width: 25%;
    display: flex;
    align-self: center;
    align-content: center;
    justify-content: center;
  }
  .descriptionDiv {
    width: 75%;
    text-align: left;
    span {
      a {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
  .userBio {
    display: block;
    font-size: 0.5em;
    text-decoration: underline;
    :hover {
      color: #61dafb;
      cursor: pointer;
    }
  }
  .userReposBtn {
    font-size: 1rem;
    button {
      background-color: rgba(255, 255, 255, 0.9);
      color: #000;
      border: none;
      text-decoration: none;
      padding: 5px 10px;
      margin: 10px 0 10px 0;
      border-radius: 10px;
      font-weight: 700;
      outline: none;
    }
    button:hover {
      color: #000;
      background-color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const UserDetails = (props) => {
  const [userDetailedInfo, setUserDetailedInfo] = React.useState(null);

  const fetchUserBio = (name) => {
    setUserDetailedInfo(null);
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => {
        console.log(res.data);
        setUserDetailedInfo(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <UserDiv>
      <div className="avatarDiv">
        <img src={props.user.avatar_url} alt={props.user.login}></img>
      </div>
      <div className="descriptionDiv">
        <span>
          <a
            href={props.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.user.login}
          </a>
        </span>
        {userDetailedInfo === null ? (
          <span
            className="userBio"
            onClick={() => fetchUserBio(props.user.login)}
          >
            Show more info
          </span>
        ) : (
          <span className="userBio" onClick={() => setUserDetailedInfo(null)}>
            Hide info
          </span>
        )}

        {userDetailedInfo === null ? null : (
          <UserBio userDetailedInfo={userDetailedInfo} />
        )}

        <div className="userReposBtn">
          <button onClick={() => alert(22)}>Show user's repos</button>
        </div>
      </div>
    </UserDiv>
  );
};

export default UserDetails;
