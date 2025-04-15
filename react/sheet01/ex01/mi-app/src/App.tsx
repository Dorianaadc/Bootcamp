import './App.css'
import './index.css'
import React from 'react';
import ListaDeTarjetas from './componentes/ListaDeTarjetas';

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tarjetas de Presentación</h1>
      <ListaDeTarjetas />
    </div>
  );
};

export default App;
