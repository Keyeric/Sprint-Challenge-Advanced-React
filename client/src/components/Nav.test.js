import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

test("renders Nav without crashing", () => {
  const { getByText } = render(<Nav />);
  const rumor = getByText(/Heard you like pokemon/i);
  expect(rumor).toBeTruthy();
});