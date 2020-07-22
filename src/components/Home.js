import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";
import UserSearch from "./UserSearch";

import { useSelector, useDispatch } from "react-redux";

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
        searchResults.map((user) => {
          return <p key={user.id}>{user.login}</p>;
        })
      )}
    </MainContainer>
  );
};

export default Home;
