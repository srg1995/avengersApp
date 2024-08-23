import React, { useContext } from "react";

import { CharactersContext } from "../../common/context/CharactersContextProvider";
import useFilterCharacters from "../../common/hook/useFilterCharacters";

export default function CharacterInput() {
  const { isShowLiked } = useContext(CharactersContext);
  const { inputValue, handleChange, charactersData } = useFilterCharacters();

  return (
    <div id="search">
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="SEARCH A CHARACTER..."
        value={inputValue}
        onChange={handleChange}
      />
      <p>
        {charactersData?.length && isShowLiked
          ? charactersData?.activeCounter
          : charactersData?.length}
        &nbsp;RESULTS
      </p>
    </div>
  );
}
