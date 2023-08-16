import React, { useCallback, useState } from "react";
import navValues from "@/helpers/navValues";
import ComponentPicker from "./componentPicker";

const { default: Banner } = require("./banner");

const navigationContext = React.createContext(navValues.home);

const App = () => {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <Banner>
        <div>Vente et location des maisons en France</div>
      </Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
