import { useState } from "react";
import GatoTabla from "./GatoTabla";

const COMBINACION_PARA_GANAR = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const JuegoDelGato = () => {
  const [tablero, setTablero] = useState(Array(9).fill(""));
  const [turnoJugador, setTurnoJugador] = useState("❌");
  const [finDelJuego, setFinDelJuego] = useState(false);
  const [puntosX, setPuntosX] = useState(0);
  const [puntosO, setPuntosO] = useState(0);

  // --- función que verifica si hay un posible ganador ---
  const verificarGanador = (tablero) => {
    // Recorremos array de posibles combinaciones ganadoras
    const hayGanador = COMBINACION_PARA_GANAR.some((conjunto) => {
      // Destructuramos la combinación
      const [a, b, c] = conjunto;

      // Condición de victoria
      if (
        tablero[a] !== "" &&
        tablero[a] === tablero[b] &&
        tablero[a] === tablero[c]
      ) {
        return true;
      }
    });

    // Si detecta ganador, coloca la variable global finDelJuego a true
    if (hayGanador) {
      setFinDelJuego(true);
    }
    // Y devuelve un Booleano
    return hayGanador;
  };

  // --- función que verifica empate ---
  const verificarEmpate = (tablero) => {
    // Verifica que no haya cadenas vacías
    const TABLERO_LLENO = !tablero.includes("");
    if (TABLERO_LLENO) {
      setFinDelJuego(true); // Correcto: detiene el juego
      return true; // Correcto: indica que la partida ha terminado por empate
    }
    return false;
  };

  // --- función que reinicia partida ---
  const reiniciarPartida = () => {
    // Reinicia el estado lógico de las variables
    setTablero(Array(9).fill(""));
    setFinDelJuego(false);
    setTurnoJugador("❌");
  };

  const manejarClickCasilla = (iCasilla) => {
    // Detiene cualquier interacción con el tablero, si detecta un ganador
    if (finDelJuego === true) return null;

    const copiaTablero = [...tablero];

    // Valida si la casilla seleciionada esta vacía
    if (copiaTablero[iCasilla] === "") {
      copiaTablero[iCasilla] = turnoJugador; // Marca en el arreglo el valor
      setTablero(copiaTablero); // Actualizamos variable tablero con la copia. Dispara el re-renderizado

      // Almacena el resultado de la verificación
      const GANADOR = verificarGanador(copiaTablero);

      // Verificación de puntaje y victoria
      if (GANADOR) {
        // ¿Quién gano? turno actual "❌"
        if (turnoJugador === "❌") {
          setPuntosX((prevPuntos) => prevPuntos + 1);
        } else {
          // ó "⭕"
          setPuntosO((prevPuntos) => prevPuntos + 1);
        }
        // Llamada automática al reinicio con temporizador
        setTimeout(reiniciarPartida, 2000);
        return;
      }

      // Verifica empate
      const EMPATE = verificarEmpate(copiaTablero);
      if (EMPATE) {
        // Llamada automática al reinicio con temporizador
        setTimeout(reiniciarPartida, 2000);
        return;
      }

      // Alternancia de turno. solo si no hay gandor
      if (turnoJugador === "⭕") {
        setTurnoJugador("❌");
      } else if (turnoJugador === "❌") {
        setTurnoJugador("⭕");
      }
    }
  };

  const manejarClickReiniciarMarcador = () => {
    // Reinicia el estado lógico de las variables y  Reinicia visualización en el DOM
    setPuntosX(0);
    setPuntosO(0);
  };

  return (
    <main>
      <section className="contenedor">
        <article className="encabezado">
          <h1>Juego del Gato</h1>
          <a
            href="https://github.com/adroprado/juego-del-gato-react"
            target="_blank"
          >
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
          onClick={manejarClickReiniciarMarcador}
        />
      </section>

      <GatoTabla manejarClickCasilla={manejarClickCasilla} tablero={tablero} />
    </main>
  );
};

export default JuegoDelGato;
