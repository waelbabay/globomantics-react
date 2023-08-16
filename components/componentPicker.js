const { default: navValues } = require("@/helpers/navValues");
const { default: BiensList } = require("./biensList");
const { default: Bien } = require("./bien");

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <BiensList />;
    case navValues.bien:
      return <Bien />;
    default:
      return <h3>component {currentNavLocation} not found</h3>;
  }
};

export default ComponentPicker;
