import GatoTabla from "./GatoTabla";

const JuegoDelGato = () => {
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
            <h2 className="marcador-jugador1"></h2>
          </div>
          <div>
            <h2>Jugador 2 ⭕</h2>
            <p>Juegos ganados:</p>
            <h2 className="marcador-jugador2"></h2>
          </div>
        </article>
        <input
          className="btn-reiniciar"
          type="button"
          value="Reiniciar Marcador"
        />
      </section>

      <GatoTabla />
    </main>
  );
};

export default JuegoDelGato;
