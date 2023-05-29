import React from 'react';

const ConversionTable = ({ conversions, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Monto en Pesos Uruguayos</th>
          <th>Valor de la Moneda Argentina</th>
          <th>Monto Convertido en Pesos Argentinos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {conversions.map((conversion) => (
          <tr key={conversion.id}>
            <td>{conversion.uruguayanAmount}</td>
            <td>{conversion.argentineanCurrency}</td>
            <td>{conversion.convertedAmount}</td>
            <td>
              <button onClick={() => onDelete(conversion.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
