import React from "react";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import MainContainer from "../Layout/MainContainer";
import UserSearch from "./search/UserSearch";
import { useSelector, useDispatch } from "react-redux";
import UserDetailsContainer from "./userInfo/UserDetailsContainer";

const Home = (props) => {
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
      <UserSearch
        handleFormSubmit={handleFormSubmit}
        fetchingUsers={fetchingUsers}
      />
      <UserDetailsContainer fetchingUsers={fetchingUsers} />
    </MainContainer>
  );
};

export default Home;
