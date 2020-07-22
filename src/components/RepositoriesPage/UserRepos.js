import React from "react";
import Navbar from "../Layout/Navbar";
import MainContainer from "../Layout/MainContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #fff;
  :hover {
    color: #61dafb;
    cursor: pointer;
  }
`;

const UserRepos = (props) => {
  const selectedUsersRepos = useSelector((state) => state.selectedUsersRepos);
  // const dispatch = useDispatch();
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      {selectedUsersRepos === null ? (
        <p>You have to select a user first.</p>
      ) : selectedUsersRepos.length === 0 ? (
        <div>
          <p>
            Unfortunately, selected user does not have any public repositories.
          </p>
          <StyledLink to="/">Try again</StyledLink>
        </div>
      ) : (
        selectedUsersRepos.map((repo) => {
          return <p key={repo.id}>{repo.name}</p>;
        })
      )}
    </MainContainer>
  );
};

export default UserRepos;
