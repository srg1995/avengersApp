// src/components/Layout/Layout.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CharactersContext } from "../../common/context/CharactersContextProvider";
import Layout from "./index";
import "@testing-library/jest-dom";

jest.mock("../../assets/icons", () => ({
  MarvelIcon: () => <div>MarvelIcon</div>,
  HeartIcon: () => <div>HeartIcon</div>,
}));

const mockContext = {
  charactersData: { activeCounter: 0 },
  setIsShowLiked: jest.fn(),
  isShowLiked: false,
  navigate: jest.fn(),
  location: { pathname: "/" },
};

describe("Layout Component", () => {
  test("renders the header with MarvelIcon and HeartIcon", () => {
    render(
      <CharactersContext.Provider value={mockContext}>
        <Layout>
          <div>Child Component</div>
        </Layout>
      </CharactersContext.Provider>
    );

    expect(screen.getByText("MarvelIcon")).toBeInTheDocument();
    expect(screen.getByText("HeartIcon")).toBeInTheDocument();
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  test("calls setIsShowLiked and navigate on HeartIcon button click", () => {
    render(
      <CharactersContext.Provider value={mockContext}>
        <Layout>
          <div>Child Component</div>
        </Layout>
      </CharactersContext.Provider>
    );

    fireEvent.click(screen.getByText("HeartIcon"));
    expect(mockContext.setIsShowLiked).toHaveBeenCalledWith(true);
  });

  test("calls setIsShowLiked and navigate on MarvelIcon button click", () => {
    render(
      <CharactersContext.Provider value={mockContext}>
        <Layout>
          <div>Child Component</div>
        </Layout>
      </CharactersContext.Provider>
    );

    fireEvent.click(screen.getByText("MarvelIcon"));

    expect(mockContext.setIsShowLiked).toHaveBeenCalledWith(false);
    expect(mockContext.navigate).toHaveBeenCalledWith("/");
  });
});
