import React from "react";
import Navbar from "../Layout/Navbar";
import MainContainer from "../Layout/MainContainer";
import ReposTable from "./ReposWrapper";

const UserRepos = (props) => {
  // const dispatch = useDispatch();
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <ReposTable />
    </MainContainer>
  );
};

export default UserRepos;
