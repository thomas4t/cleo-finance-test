import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";
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
  const [loading, setLoading] = React.useState(false);

  const fetchResults = (query) => {
    axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SET_SEARCH_RESULTS",
          val: res.data.items,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (query) => {
    fetchResults(query);
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
