import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";

const UserRepos = (props) => {
  React.useEffect(() => {
    console.log("XS");
    let url = "https://api.github.com/users/gaearon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <p>React app aka Home.</p>
      <p className="colorTest">Test of color</p>
    </MainContainer>
  );
};

export default UserRepos;
