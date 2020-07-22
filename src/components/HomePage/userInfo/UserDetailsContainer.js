import React from "react";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

const DetailsContainer = styled.div`
  width: 40vw;
  margin: auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  @media only screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
  }
`;
const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
`;

const UserDetailsContainer = (props) => {
  const searchResults = useSelector((state) => state.searchResults);
  if (props.fetchingUsers) {
    return (
      <LoaderDiv>
        <ReactLoading
          type={"spin"}
          color={"#61dafb"}
          height={"10%"}
          width={"10%"}
        />
      </LoaderDiv>
    );
  }
  if (searchResults === null) {
    return <p>Enter a username first</p>;
  } else if (searchResults.length === 0) {
    return <p>No results found</p>;
  } else {
    return (
      <DetailsContainer>
        {searchResults.map((user) => {
          return <UserDetails key={user.id} user={user} />;
        })}
      </DetailsContainer>
    );
  }
};

export default UserDetailsContainer;
