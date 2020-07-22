import React from "react";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import MainContainer from "../Layout/MainContainer";
import UserSearch from "./UserSearch";
import UserDetails from "./UserDetails";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const UserDetailsContainer = styled.div`
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

const Home = (props) => {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const [fetchingUsers, setFetchingUsers] = React.useState(false);

  const fetchUsers = async (query) => {
    setFetchingUsers(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    dispatch({
      type: "SET_SEARCH_RESULTS",
      val: response.data.items,
    });
    setFetchingUsers(false);
  };

  const handleFormSubmit = (query) => {
    fetchUsers(query);
  };

  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <UserSearch handleFormSubmit={handleFormSubmit} />
      {searchResults === null ? (
        <p>Enter a username first</p>
      ) : searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <UserDetailsContainer>
          {searchResults.map((user) => {
            return <UserDetails key={user.id} user={user} />;
          })}
        </UserDetailsContainer>
      )}
    </MainContainer>
  );
};

export default Home;
