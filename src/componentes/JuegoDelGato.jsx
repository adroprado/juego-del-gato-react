import { useState } from "react";
import GatoTabla from "./GatoTabla";

const JuegoDelGato = () => {
  const [tablero, setTablero] = useState(Array(9).fill(""));
  const [turnoJugador, setTurnoJugador] = useState("❌");
  const [finDelTurnoJugador, setFinDelTurnoJugador] = useState(false);
  const [puntosX, setPuntosX] = useState(0);
  const [puntosO, setPuntosO] = useState(0);

  const manejarClickCasilla = (iCasilla) => {
    console.log(iCasilla);

    const copiaTablero = [...tablero];

    // Valida si la casilla seleciionada esta vacía
    if (copiaTablero[iCasilla] === "") {
      copiaTablero[iCasilla] = turnoJugador; // Marca en el arreglo el valor
      setTablero(copiaTablero); // Actualizamos variable tablero con la copia. Dispara el re-renderizado
      console.log(copiaTablero);

      // Alternancia de turno. solo si no hay gandor
      if (turnoJugador === "⭕") {
        setTurnoJugador("❌");
      } else if (turnoJugador === "❌") {
        setTurnoJugador("⭕");
      }
    }
  };

  return (
    <main>
      <section className="contenedor">
        <article className="encabezado">
          <h1>Juego del Gato</h1>
          <a href="" target="_blank">
            <img src="/src/assets/github.svg" alt="Github" />
          </a>
        </article>

        <article className="informacion">
          <div>
            <h2>Jugador 1 ❌</h2>
            <p>Juegos ganados:</p>
            <h2 className="marcador-jugador1">{puntosX}</h2>
          </div>
          <div>
            <h2>Jugador 2 ⭕</h2>
            <p>Juegos ganados:</p>
            <h2 className="marcador-jugador2">{puntosO}</h2>
          </div>
        </article>
        <input
          className="btn-reiniciar"
          type="button"
          value="Reiniciar Marcador"
        />
      </section>

      <GatoTabla manejarClickCasilla={manejarClickCasilla} tablero={tablero} />
    </main>
  );
};

export default JuegoDelGato;
