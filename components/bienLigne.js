import deviseFormatter from "@/helpers/deviseFormatter";

const BienLigne = ({ bien, selectBien }) => {
  return (
    <>
      <tr onClick={() => selectBien(bien)}>
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
