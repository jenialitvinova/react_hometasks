import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "../Cart";
import { store } from "../../../../store/store";

describe("Cart component", () => {
  it("renders Cart component with initial state", () => {
    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
