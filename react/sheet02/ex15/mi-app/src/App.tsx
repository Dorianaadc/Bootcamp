import { useEffect, useState } from 'react';

function App() {
  const [tiempo, setTiempo] = useState(0); // en segundos
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo: number;

    if (activo) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [activo]);

  const iniciar = () => setActivo(true);
  const detener = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(0);
  };

  const formatearTiempo = (segundos: number) => {
    const min = String(Math.floor(segundos / 60)).padStart(2, '0');
    const seg = String(segundos % 60).padStart(2, '0');
    return `${min}:${seg}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>⏱️ Cronómetro</h1>
      <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>{formatearTiempo(tiempo)}</h2>
      <button onClick={iniciar} disabled={activo} style={{ margin: '0 10px' }}>
        Iniciar
      </button>
      <button onClick={detener} disabled={!activo} style={{ margin: '0 10px' }}>
        Detener
      </button>
      <button onClick={reiniciar} style={{ margin: '0 10px' }}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;
