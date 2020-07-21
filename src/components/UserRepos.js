import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";

const UserRepos = (props) => {
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <p>User repositories.</p>
      <p className="colorTest">Test of color</p>
    </MainContainer>
  );
};

export default UserRepos;
