import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";
import UserSearch from "./UserSearch";

const UserRepos = (props) => {
  React.useEffect(() => {
    console.log("XS");
    let user = "thomas4t"; //gaearon
    let url = `https://api.github.com/users/${user}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    axios
      .get(`https://api.github.com/search/users?q=thomas4t`)
      .then((res) => console.log(res.data));
  }, []);
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <p>Find a user</p>
      <UserSearch />
      <p className="colorTest">Test of color</p>
    </MainContainer>
  );
};

export default UserRepos;
