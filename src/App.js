import "./App.css";
import React, { useContext } from "react";
import Layout from "./components/Layout";
import { CharactersContext } from "./common/context/CharactersContextProvider";
import CharacterInput from "./components/CharacterInput/CharacterInput";
import CardsInfo from "./components/CardsInfo/CardsInfo";

const App = () => {
  const { charactersData, isShowLiked } = useContext(CharactersContext);

  return (
    <Layout>
      {!charactersData.length ? (
        <div className="spinner"></div>
      ) : (
        <>
          <article className="characters">
            {isShowLiked && <h1>FAVORITES</h1>}
            <CharacterInput />
          </article>

          <article className="characters">
            <CardsInfo />
          </article>
        </>
      )}
    </Layout>
  );
};

export default App;
