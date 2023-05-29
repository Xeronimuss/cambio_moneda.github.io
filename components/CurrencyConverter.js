import React, { useState } from 'react';
import ConversionTable from './ConversionTable';

const CurrencyConverter = () => {
  const [uruguayanAmount, setUruguayanAmount] = useState('');
  const [argentineanCurrency, setArgentineanCurrency] = useState('');
  const [conversions, setConversions] = useState([]);

  const handleUruguayanAmountChange = (event) => {
    setUruguayanAmount(event.target.value);
  };

  const handleArgentineanCurrencyChange = (event) => {
    setArgentineanCurrency(event.target.value);
  };

  const handleConversion = () => {
    if (uruguayanAmount !== '' && argentineanCurrency !== '') {
      const uruguayanAmountFloat = parseFloat(uruguayanAmount);
      const argentineanCurrencyFloat = parseFloat(argentineanCurrency);
      const conversion = {
        id: Date.now(),
        uruguayanAmount: uruguayanAmountFloat,
        argentineanCurrency: argentineanCurrencyFloat,
        convertedAmount: uruguayanAmountFloat / argentineanCurrencyFloat
      };
      setConversions([...conversions, conversion]);
      setUruguayanAmount('');
      setArgentineanCurrency('');
    }
  };

  const handleDeleteConversion = (id) => {
    const updatedConversions = conversions.filter((conversion) => conversion.id !== id);
    setConversions(updatedConversions);
  };

  const handleDeleteAllConversions = () => {
    setConversions([]);
  };

  return (
    <div>
      <h1>Cambio de Pesos Uruguayos a Pesos Argentinos</h1>
      <label>
        Monto en Pesos Uruguayos:
        <input type="number" value={uruguayanAmount} onChange={handleUruguayanAmountChange} />
      </label>
      <label>
        Valor de la Moneda Argentina:
        <input type="number" value={argentineanCurrency} onChange={handleArgentineanCurrencyChange} />
      </label>
      <button onClick={handleConversion}>Convertir</button>
      {conversions.length > 0 && (
        <div>
          <ConversionTable conversions={conversions} onDelete={handleDeleteConversion} />
          <button onClick={handleDeleteAllConversions}>Borrar Todo</button>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
