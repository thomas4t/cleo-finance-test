import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ReposFilters from "./ReposFilters";

const TableContainer = styled.div`
  width: 40vw;
  margin: auto;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  @media only screen and (max-width: 1200px) {
    width: 75vw;
  }
  @media only screen and (max-width: 768px) {
    width: 85vw;
  }
  @media only screen and (max-width: 480px) {
    width: 95vw;
  }
  table {
    width: 100%;
    margin: auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    th {
      font-size: 1em;
    }
    .th-star-gazers {
      padding: 0 2%;
    }
    .name {
      text-align: center;
      font-size: 0.9em;
      a {
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        color: #61dafb;
      }
    }
    .star-gazers {
      text-align: center;
      font-size: 0.9em;
      padding-right: 2%;
    }
  }
`;

const ReposTable = (props) => {
  const selectedUsersRepos = useSelector((state) => state.selectedUsersRepos);
  const [displayedRepos, setDisplayedRepos] = React.useState(
    selectedUsersRepos
  );
  const [isStarFilterOn, setIsStarFiterOn] = React.useState(false);

  React.useEffect(() => {
    setDisplayedRepos(selectedUsersRepos);
  }, [selectedUsersRepos]);

  const handleFilterByNameChange = (e) => {
    let filterVal = e.target.value;
    filterReposByName(filterVal);
  };
  const handleStarFilterChange = (e) => {
    setIsStarFiterOn(e.target.checked);
    //if query param is empty,
    console.log(e.target.checked);
    if (e.target.checked) {
      sortReposByStars();
    }
  };

  const sortReposByStars = () => {
    const cloned = [...displayedRepos];
    cloned.sort((a, b) => b.stargazers_count - a.stargazers_count);
    setDisplayedRepos(cloned);
  };
  const filterReposByName = (query) => {
    const newRepos = selectedUsersRepos.filter((repo) =>
      repo.name.includes(query)
    );
    //If star filter is on, filter it further
    if (isStarFilterOn) {
      console.log("I SHOULD ALSO FILTER IT BY STARS");
      newRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setDisplayedRepos(newRepos);
      //sortReposByStars();
    } else {
      console.log("leave it as is");
      setDisplayedRepos(newRepos);
    }
  };

  return (
    <>
      <ReposFilters
        handleFilterByNameChange={handleFilterByNameChange}
        handleStarFilterChange={handleStarFilterChange}
      />
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th className="th-star-gazers">Star gazers</th>
            </tr>
          </thead>
          <tbody>
            {displayedRepos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td className="name">
                    <a
                      name="repo-name"
                      href={repo.svn_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </td>
                  <td>{repo.stargazers_count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default ReposTable;
