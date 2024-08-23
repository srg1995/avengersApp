import React, { useContext } from "react";
import { HeartIcon, MarvelIcon } from "../../assets/icons";

import { CharactersContext } from "../../common/context/CharactersContextProvider";

export default function Layout({ children }) {
  const { charactersData, setIsShowLiked, isShowLiked, navigate, location } =
    useContext(CharactersContext);
  return (
    <>
      <header>
        <button
          onClick={() => {
            setIsShowLiked(false);
            navigate("/");
          }}
        >
          <MarvelIcon />
        </button>

        <button
          id="likes"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            }
            setIsShowLiked(!isShowLiked);
          }}
        >
          <HeartIcon />
          <p>{charactersData.activeCounter}</p>
        </button>
      </header>
      <section>{children}</section>
    </>
  );
}
