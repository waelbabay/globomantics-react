import { useState } from "react";
import BiensList from "./biensList";
import Bien from "./bien";

const { default: Banner } = require("./banner");

const App = () => {
  const [selectedBien, setSelectedBien] = useState();

  const setSelectedBienWrapper = (bien) => {
    setSelectedBien(bien);
  };

  return (
    <>
      <Banner>
        <div>Vente et location des maisons en France</div>
      </Banner>
      {selectedBien ? (
        <Bien bien={selectedBien}></Bien>
      ) : (
        <BiensList selectBien={setSelectedBienWrapper}></BiensList>
      )}
    </>
  );
};

export default App;
