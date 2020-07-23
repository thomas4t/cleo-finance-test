import React from "react";
import styled from "styled-components";
const StyledInputDiv = styled.div`
  width: 40vw;
  margin: auto;
  padding: 1% 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  @media only screen and (max-width: 1200px) {
    width: 75vw;
  }
  @media only screen and (max-width: 768px) {
    width: 85vw;
  }
  @media only screen and (max-width: 480px) {
    width: 95vw;
  }
  .text-input {
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
  }
  .text-input:hover,
  .text-input:focus {
    border: 2px solid #61dafb;
    padding: 8px 18px;
  }
  label {
    padding-left: 2%;
    input:hover {
      cursor: pointer;
    }
  }
  label:hover {
    color: #61dafb;
    cursor: pointer;
  }
  /*
  .checkbox {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .checkbox:hover {
    background-color: #ccc;
  }
  .checkbox:checked {
    background-color: #2196f3;
  } */
`;

const ReposFilters = (props) => {
  return (
    <StyledInputDiv>
      <input
        className="text-input"
        type="text"
        placeholder="Filter repos by name"
      />
      <label>
        Filter by star gazers
        <input type="checkbox" className="checkbox"></input>
      </label>
    </StyledInputDiv>
  );
};

export default ReposFilters;
