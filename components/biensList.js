import BienLigne from "./bienLigne";
import useBiens from "@/hooks/usebiens";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "@/helpers/loadingStatus";

const BiensList = () => {
  const { biens, isLoading } = useBiens();

  if (isLoading)
    return (
      <LoadingIndicator
        loadingState={loadingStatus.isLoading}
      ></LoadingIndicator>
    );

  const AjouterBien = () => {};

  return (
    <>
      <div className="row mb2">
        <h5 className="themeFontColor text-center">
          Liste des biens disponibles
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Adresse</th>
            <th>Ville</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {biens.map((bien) => (
            <BienLigne key={bien.id} bien={bien}></BienLigne>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={AjouterBien}>
        Ajouter un bien
      </button>
    </>
  );
};

export default BiensList;
