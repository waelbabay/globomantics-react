import deviseFormatter from "@/helpers/deviseFormatter";
import { navigationContext } from "./app";
import { useContext } from "react";

const Bien = () => {
  const { param: bien } = useContext(navigationContext);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <img
              className="img-fluid"
              src={`./biensImages/${bien.photo}`}
              alt="bien pic"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{bien.ville}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{bien.adresse}</h3>
          </div>
          <div className="row">
            <h2 className="themeFontColor col-12">
              {deviseFormatter.format(bien.prix)}
            </h2>
          </div>
          <div className="row">
            <div className="col-12 mt-3">{bien.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bien;
