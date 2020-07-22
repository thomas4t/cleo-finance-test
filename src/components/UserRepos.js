import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";
import { useSelector, useDispatch } from "react-redux";

const UserRepos = (props) => {
  const selectedUsersRepos = useSelector((state) => state.selectedUsersRepos);
  // const dispatch = useDispatch();
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <p>User repositories.</p>
      <p className="colorTest">Test of color</p>
      {selectedUsersRepos === null ? "its null" : "not anymore"}
    </MainContainer>
  );
};

export default UserRepos;
