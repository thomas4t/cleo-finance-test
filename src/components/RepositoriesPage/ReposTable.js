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

  return (
    <>
      <ReposFilters />
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th className="th-star-gazers">Star gazers</th>
            </tr>
          </thead>
          <tbody>
            {selectedUsersRepos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td className="name">{repo.name}</td>
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
