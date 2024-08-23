import React, { useEffect, useState, createContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { charactersAdapter } from "../../services/adapters/charactersAdapter";
import { fetchCharacters } from "../../services/charactersService";

export const CharactersContext = createContext();

export default function CharactersContextProvider({ children }) {
  const [charactersData, setCharactersData] = useState({});
  const [isShowLiked, setIsShowLiked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      fetchCharacters().then((result) => {
        setCharactersData(charactersAdapter(result));
      });
    }
  }, [location.pathname]);

  return (
    <CharactersContext.Provider
      value={{
        charactersData,
        setCharactersData,
        navigate,
        location,
        isShowLiked,
        setIsShowLiked,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
