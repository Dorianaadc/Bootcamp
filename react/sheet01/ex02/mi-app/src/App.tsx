import './App.css'
import './index.css'
import React from 'react';
import ListaDeProductos from './componentes/ListaDeProductos';

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Productos</h1>
      <ListaDeProductos />
    </div>
  );
};

export default App;
