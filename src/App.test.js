import React from "react";
import { render, screen } from "@testing-library/react";
import { CharactersContext } from "./common/context/CharactersContextProvider";
import App from "./App";

import "@testing-library/jest-dom";

jest.mock("./components/Layout", () => ({ children }) => <div>{children}</div>);
jest.mock("./components/CharacterInput/CharacterInput", () => () => (
  <div>CharacterInput Component</div>
));
jest.mock("./components/CardsInfo/CardsInfo", () => () => (
  <div>CardsInfo Component</div>
));

describe("App Component", () => {
  test("renders the CharacterInput and CardsInfo components when charactersData is available", () => {
    render(
      <CharactersContext.Provider
        value={{ charactersData: [{ id: 1 }], isShowLiked: false }}
      >
        <App />
      </CharactersContext.Provider>
    );

    expect(screen.getByText("CharacterInput Component")).toBeInTheDocument();
    expect(screen.getByText("CardsInfo Component")).toBeInTheDocument();
  });

  test("renders the 'FAVORITES' title when isShowLiked is true", () => {
    render(
      <CharactersContext.Provider
        value={{ charactersData: [{ id: 1 }], isShowLiked: true }}
      >
        <App />
      </CharactersContext.Provider>
    );

    expect(screen.getByText("FAVORITES")).toBeInTheDocument();
  });
});
