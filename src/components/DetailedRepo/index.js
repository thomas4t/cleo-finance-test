import React from "react";

import MainContainer from "../Layout/MainContainer";
import Navbar from "../Layout/Navbar";
import DetailsContainer from "./DetailsContainer";

const DetailedRepo = (props) => {
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <DetailsContainer />
    </MainContainer>
  );
};

export default DetailedRepo;
