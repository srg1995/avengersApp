import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharactersContextProvider from "./common/context/CharactersContextProvider";

//const App = React.lazy(() => import("./App"));
import App from "./App";
import CharacterDetail from "./pages/characterDetail";

const AppRoutes = () => {
  return (
    <Router>
      <CharactersContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/characterDetailPage/:id"
            element={<CharacterDetail />}
          />
        </Routes>
      </CharactersContextProvider>
    </Router>
  );
};
export default AppRoutes;
