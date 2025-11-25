import GatoCasilla from "./GatoCasilla";

const GatoFila = () => {
  return (
    <>
      <tr className="columna-uno">
        <GatoCasilla casilla={0} />
        <GatoCasilla casilla={1} />
        <GatoCasilla casilla={2} />
      </tr>
      <tr className="columna-dos">
        <GatoCasilla casilla={3} />
        <GatoCasilla casilla={4} />
        <GatoCasilla casilla={5} />
      </tr>
      <tr className="columna-tres">
        <GatoCasilla casilla={6} />
        <GatoCasilla casilla={7} />
        <GatoCasilla casilla={8} />
      </tr>
    </>
  );
};

export default GatoFila;
