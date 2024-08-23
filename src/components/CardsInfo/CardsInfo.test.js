import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardsInfo from "./CardsInfo";
import { CharactersContext } from "../../common/context/CharactersContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

const mockSetCharactersData = jest.fn();
const mockNavigate = jest.fn();

const mockCharactersData = {
  characters: [
    {
      id: 1,
      name: "Spider-Man",
      image: "spiderman.jpg",
      isLiked: false,
    },
  ],
};

describe("CardsInfo Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <CharactersContext.Provider
        value={{
          charactersData: mockCharactersData,
          setCharactersData: mockSetCharactersData,
          navigate: mockNavigate,
          isShowLiked: true,
        }}
      >
        <Router>
          <CardsInfo />
        </Router>
      </CharactersContext.Provider>
    );
  });

  test("should render character cards and handle like button click", () => {
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(mockSetCharactersData).toHaveBeenCalled();
  });
});
