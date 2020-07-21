import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//can do some testing stuff later
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); //would fail
});
