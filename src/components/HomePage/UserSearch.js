import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  #queryInput {
    div {
      color: #61dafb;
      font-size: calc(10px + 0.8vmin);
    }
  }
  input {
    padding: 10px 20px;
    outline: none;
    margin-top: 10%;
    border: none;
    border-radius: 5px;
  }
  input:hover,
  input:focus {
    border: 2px solid #61dafb;
    padding: 8px 18px;
  }

  button {
    background-color: #000;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px 10px 20px;
    margin: 1%;
    border: 1px solid white;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
  }
  button:hover {
    color: #61dafb;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const UserSearch = (props) => {
  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        validationSchema={Yup.object({
          query: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Cannot be empty")
            .matches(
              /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
              "Invalid user name"
            ),
        })}
        onSubmit={(values) => {
          props.handleFormSubmit(values.query);
        }}
      >
        <StyledForm>
          <div id="queryInput">
            <Field name="query" type="text" placeholder="Find a user" />
            <ErrorMessage name="query" component="div" />
          </div>
          <button type="submit">Search</button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default UserSearch;
