import GatoCasilla from "./GatoCasilla";

const GatoFila = ({ manejarClickCasilla, tablero }) => {
  return (
    <>
      <tr className="columna-uno">
        <GatoCasilla
          casilla={0}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={1}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={2}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
      </tr>
      <tr className="columna-dos">
        <GatoCasilla
          casilla={3}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={4}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={5}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
      </tr>
      <tr className="columna-tres">
        <GatoCasilla
          casilla={6}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={7}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
        <GatoCasilla
          casilla={8}
          manejarClickCasilla={manejarClickCasilla}
          tablero={tablero}
        />
      </tr>
    </>
  );
};

export default GatoFila;
