import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 0.7em;
`;

const UserBio = (props) => {
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
};

export default UserBio;
