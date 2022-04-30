import React from "react";
//import separate components
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";

const App = () => {
  function logWhenClicked() {
    console.log("Hello Kate");
  }

  return (
    <div>
      <Logo handleLog={logWhenClicked} />
      <BestPokeman />
      <CaughtPokemon />
      <PokemonMoves />
    </div>
  );
};

export default App;
