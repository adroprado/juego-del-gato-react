import GatoFila from "./GatoFila";

const GatoTabla = ({ manejarClickCasilla, tablero }) => {
  return (
    <table className="tabla">
      <tbody>
        <GatoFila tablero={tablero} manejarClickCasilla={manejarClickCasilla} />
      </tbody>
    </table>
  );
};

export default GatoTabla;
