import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const StyledDiv = styled.div`
  font-size: 0.7em;
`;

const LoaderDiv = styled.div`
  margin: 10%;
`;

const UserBio = (props) => {
  //Loader
  if (props.fetchingUserBio) {
    return (
      <LoaderDiv>
        <ReactLoading
          type={"cylon"}
          color={"#61dafb"}
          height={"10%"}
          width={"10%"}
        />
      </LoaderDiv>
    );
  }
  //Deciding whether bio gets rendered or not
  if (!props.isBioDisplayed) {
    return null;
  } else {
    return (
      <StyledDiv>
        <p>
          Amount of public repositories: {props.userDetailedInfo.public_repos}
        </p>
        <p>
          Name:{" "}
          {props.userDetailedInfo.name === null
            ? "Not provided"
            : props.userDetailedInfo.name}
        </p>
        <p>
          Bio:{" "}
          {props.userDetailedInfo.bio === null
            ? "Not provided"
            : props.userDetailedInfo.bio}
        </p>
      </StyledDiv>
    );
  }
};

export default UserBio;
