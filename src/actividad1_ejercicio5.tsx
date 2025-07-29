import React, { useState } from 'react';

export default function Actividad1Ejercicio5() {
  const [contador, setContador] = useState(5);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Acumulador</h2>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
    </div>
  );
}

