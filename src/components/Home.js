import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MainContainer from "./Layout/MainContainer";
import UserSearch from "./UserSearch";

const Home = (props) => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const fetchResults = (query) => {
    if (query.length !== 0) {
      axios
        .get(`https://api.github.com/search/users?q=${query}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      console.log("please enter a search term");
    }
  };

  const handleSearchInputChange = (event) => {
    let newVal = event.target.value;
    setQuery(newVal);
  };

  const handleFormSubmit = (event) => {
    fetchResults(query);
  };

  //   React.useEffect(() => {
  //     console.log("XS");
  //     let user = "thomas4t"; //gaearon
  //     let url = `https://api.github.com/users/${user}`;
  //     axios
  //       .get(`https://api.github.com/search/users?q=Bundas`)
  //       .then((res) => console.log(res.data));
  //   }, []);

  React.useEffect(() => {
    console.log("change");
  }, [results]);

  return (
    <MainContainer>
      <header>
        <Navbar />
      </header>
      <UserSearch
        query={query}
        setResults={setResults}
        handleSearchInputChange={handleSearchInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <p className="colorTest">Test of color</p>
      <p>second</p>
    </MainContainer>
  );
};

export default Home;
