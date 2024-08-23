import { useContext, useEffect } from "react";
import { CharactersContext } from "../context/CharactersContextProvider";
import { useDebounce } from "./useDebounce";
import { charactersAdapter } from "../../services/adapters/charactersAdapter";
import { fetchCharacters } from "../../services/charactersService";

export default function useFilterCharacters() {
  const {
    charactersData,
    setCharactersData,

    inputValue,
    setInputValue,
  } = useContext(CharactersContext);

  const debouncedSearch = useDebounce(inputValue, 500);

  const handleChange = (e) => {
    setInputValue(e?.target?.value);
  };

  useEffect(() => {
    if (debouncedSearch) {
      fetchCharacters(inputValue).then((result) => {
        setCharactersData(charactersAdapter(result));
      });
    }
  }, [debouncedSearch, inputValue, setCharactersData]);
  return { inputValue, charactersData, handleChange };
}
