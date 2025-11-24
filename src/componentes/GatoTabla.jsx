const GatoTabla = () => {
  return (
    <table className="tabla">
      <tbody>
        <tr className="columna-uno">
          <td className="casilla" data-value="0"></td>
          <td className="casilla" data-value="1"></td>
          <td className="casilla" data-value="2"></td>
        </tr>
        <tr className="columna-dos">
          <td className="casilla" data-value="3"></td>
          <td className="casilla" data-value="4"></td>
          <td className="casilla" data-value="5"></td>
        </tr>
        <tr className="columna-tres">
          <td className="casilla" data-value="6"></td>
          <td className="casilla" data-value="7"></td>
          <td className="casilla" data-value="8"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default GatoTabla;
