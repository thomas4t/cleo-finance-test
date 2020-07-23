import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactLoading from "react-loading";
import ReposTable from "./ReposTable";

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #fff;
  :hover {
    color: #61dafb;
    cursor: pointer;
  }
`;
const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
`;

const ReposWrapper = (props) => {
  const selectedUsersRepos = useSelector((state) => state.selectedUsersRepos);
  const fetchingUsersRepos = useSelector((state) => state.fetchingUsersRepos);

  //Loader
  if (fetchingUsersRepos) {
    return (
      <LoaderDiv>
        <ReactLoading
          type={"bars"}
          color={"#61dafb"}
          height={"10%"}
          width={"10%"}
        />
      </LoaderDiv>
    );
  }
  //Displaying results based on their contents
  if (selectedUsersRepos === null) {
    return <p>You have to select a user first.</p>;
  } else if (selectedUsersRepos.length === 0) {
    return (
      <div>
        <p>
          Unfortunately, selected user does not have any public repositories.
        </p>
        <StyledLink to="/">Try again</StyledLink>
      </div>
    );
  } else {
    return (
      <div>
        <p>Public repositories of {selectedUsersRepos[0].owner.login}</p>
        <ReposTable />
      </div>
    );

    // selectedUsersRepos.map((repo) => {
    //   return <p key={repo.id}>{repo.name}</p>;
    // });
  }
};
export default ReposWrapper;
