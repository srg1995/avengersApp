import "./App.css";
import React, { lazy, Suspense, useContext } from "react";
import Layout from "./components/Layout";
import { CharactersContext } from "./common/context/CharactersContextProvider";
import CharacterInput from "./components/CharacterInput/CharacterInput";

import CardsInfoSkeleton from "./components/CardsInfo/CardsInfoSkeleton";

const CardsInfo = lazy(() => import("./components/CardsInfo/CardsInfo"));

const App = () => {
  const { isShowLiked } = useContext(CharactersContext);

  return (
    <Layout>
      <>
        <article className="characters">
          {isShowLiked && <h1>FAVORITES</h1>}
          <CharacterInput />
        </article>

        <article className="characters">
          <Suspense fallback={<CardsInfoSkeleton />}>
            <CardsInfo />
          </Suspense>
        </article>
      </>
    </Layout>
  );
};

export default App;
