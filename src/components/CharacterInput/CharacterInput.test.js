import React from "react";
import { render, screen } from "@testing-library/react";
import { CharactersContext } from "../../common/context/CharactersContextProvider";
import useFilterCharacters from "../../common/hook/useFilterCharacters";
import CharacterInput from "./CharacterInput";
import "@testing-library/jest-dom";

jest.mock("../../common/hook/useFilterCharacters", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockContext = {
  isShowLiked: false,
};

describe("CharacterInput Component", () => {
  beforeEach(() => {
    useFilterCharacters.mockImplementation(() => ({
      inputValue: "",
      handleChange: jest.fn(),
      charactersData: {
        length: 0,
        activeCounter: 0,
      },
    }));
  });

  test("renders the input and result count", () => {
    render(
      <CharactersContext.Provider value={mockContext}>
        <CharacterInput />
      </CharactersContext.Provider>
    );

    expect(
      screen.getByPlaceholderText("SEARCH A CHARACTER...")
    ).toBeInTheDocument();
    expect(screen.getByText("0 RESULTS")).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    useFilterCharacters.mockImplementation(() => ({
      inputValue: "Spider-Man",
      handleChange: jest.fn(),
      charactersData: {
        length: 1,
        activeCounter: 1,
      },
    }));

    render(
      <CharactersContext.Provider value={mockContext}>
        <CharacterInput />
      </CharactersContext.Provider>
    );

    expect(screen.getByDisplayValue("Spider-Man")).toBeInTheDocument();
    expect(screen.getByText("1 RESULTS")).toBeInTheDocument();
  });
});
