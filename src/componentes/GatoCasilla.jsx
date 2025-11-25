const GatoCasilla = ({ casilla, manejarClickCasilla, tablero }) => {
  console.log(tablero);
  return (
    <>
      <td
        className="casilla"
        posicion={casilla}
        onClick={() => {
          manejarClickCasilla(casilla);
        }}
      >
        {tablero[casilla]}
      </td>
    </>
  );
};

export default GatoCasilla;
