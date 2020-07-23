import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserBio from "./UserBio";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const UserDiv = styled.div`
  display: flex;
  align-self: flex-start;
  height: auto;
  margin: 1vmin auto;
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
    padding: 1px;
    font-size: 0.6em;
    font-weight: bold;
    text-decoration: underline;
    background: none;
    border: none;
    outline: none;
    color: #61dafb;
    :hover {
      color: #fff;
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
  const [fetchingUserBio, setFetchingUserBio] = React.useState(false);
  const [isBioDisplayed, setIsBioDisplayed] = React.useState(false);
  const dispatch = useDispatch();

  const fetchUserBio = async (name) => {
    setFetchingUserBio(true);
    const response = await axios.get(`https://api.github.com/users/${name}`);
    setUserDetailedInfo(response.data);
    setFetchingUserBio(false);
  };

  const fetchUserRepos = async (login) => {
    //set loading to true
    dispatch({
      type: "FETCHING_USERS_REPOS",
      val: true,
    });
    const response = await axios.get(
      `https://api.github.com/users/${login}/repos`
    );
    console.log(response.data);
    dispatch({
      type: "SET_SELECTED_USERS_REPOS",
      val: response.data,
    });
    dispatch({
      type: "FETCHING_USERS_REPOS",
      val: false,
    });
  };

  const handleOnShowReposClick = (user) => {
    fetchUserRepos(user.login);
  };
  const handleOnShowBioClick = () => {
    setIsBioDisplayed(true);
    if (userDetailedInfo === null) {
      fetchUserBio(props.user.login);
    }
  };
  const handleOnHideBioClick = () => {
    setIsBioDisplayed(false);
  };

  return (
    <UserDiv>
      <div className="avatarDiv">
        <img src={props.user.avatar_url} alt={props.user.login}></img>
      </div>
      <div className="descriptionDiv">
        <span>
          <a
            name="users-name"
            href={props.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.user.login}
          </a>
        </span>
        {!isBioDisplayed ? (
          <button
            className="userBio"
            onClick={() => handleOnShowBioClick()}
            disabled={fetchingUserBio}
          >
            Show more info
          </button>
        ) : (
          <button className="userBio" onClick={() => handleOnHideBioClick()}>
            Hide info
          </button>
        )}
        <UserBio
          userDetailedInfo={userDetailedInfo}
          fetchingUserBio={fetchingUserBio}
          isBioDisplayed={isBioDisplayed}
        />

        <div className="userReposBtn">
          <Link to="/userRepos">
            <button onClick={() => handleOnShowReposClick(props.user)}>
              Show user's repos
            </button>
          </Link>
        </div>
      </div>
    </UserDiv>
  );
};

export default UserDetails;
