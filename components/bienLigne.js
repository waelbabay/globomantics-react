import deviseFormatter from "@/helpers/deviseFormatter";
import { useContext } from "react";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const BienLigne = ({ bien }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <>
      <tr onClick={() => navigate(navValues.bien, bien)}>
        <td>{bien.adresse}</td>
        <td>{bien.ville}</td>
        <td className={`${bien.prix > 1000 ? "text-danger" : ""}`}>
          {deviseFormatter.format(bien.prix)}
        </td>
      </tr>
    </>
  );
};

export default BienLigne;
