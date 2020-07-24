import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ReposFilters from "./ReposFilters";
import { Link } from "react-router-dom";

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
      text-align: left;
      font-size: 0.9em;
      padding-left: 5%;
      a {
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        color: #61dafb;
      }
      span {
        padding-left: 2%;
        a {
          font-size: 0.75em;
          color: #61dafb;
        }
        a:hover {
          color: rgba(255, 255, 255, 0.8);
        }
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
  const dispatch = useDispatch();
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
    //If star filter is on, filter it by stars as well
    //TODO
    //Change sortReposByStars func so that it returns intead of setting
    if (isStarFilterOn) {
      newRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setDisplayedRepos(newRepos);
    } else {
      setDisplayedRepos(newRepos);
    }
  };
  const handleRouteToDetailsClick = (repo) => {
    dispatch.detailedRepo.set(repo);
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
                    <span>
                      <Link
                        to="/detailed-repo"
                        onClick={() => handleRouteToDetailsClick(repo)}
                      >
                        Show details
                      </Link>
                    </span>
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
