import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  width: 40vw;
  margin: auto;
  text-align: left;
  .key {
    font-size: 0.9em;
    color: #61dafb;
  }
  .value {
    font-size: 0.8em;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
  }
`;

const DetailsContainer = (props) => {
  const detailedRepo = useSelector((state) => state.detailedRepo);
  if (detailedRepo === null) {
    return <p>Oops, u shouldn't be here. Better select some repo.</p>;
  } else {
    return (
      <StyledDiv>
        <h3>Details</h3>
        <p className="key">
          URL:{" "}
          <span>
            <a className="value" href={detailedRepo.html_url}>
              {detailedRepo.html_url}
            </a>
          </span>
        </p>
        <p className="key">
          Full name: <span className="value">{detailedRepo.full_name}</span>
        </p>
        {detailedRepo.description !== null ? (
          <p className="key">
            Description:{" "}
            <span className="value">{detailedRepo.description}</span>
          </p>
        ) : (
          <span className="value">Description not provided</span>
        )}
        <p className="key">
          Created at: <span className="value">{detailedRepo.created_at}</span>
        </p>
        <p className="key">
          Language:{" "}
          {detailedRepo.language === null ? (
            <span className="value">unknown</span>
          ) : (
            <span className="value">{detailedRepo.language}</span>
          )}
        </p>
        <Link className="value" to="/user-repos">
          Go back to all repos
        </Link>
      </StyledDiv>
    );
  }
};

export default DetailsContainer;
