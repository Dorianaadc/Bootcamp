import { useState } from 'react';
import Producto from './Producto';
import Carrito from './Carrito';

function App() {
  const productos = ['Camisa', 'Pantalón', 'Zapatos', 'Gorra'];
  const [carrito, setCarrito] = useState<string[]>([]);

  const agregarAlCarrito = (producto: string) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto: string) => {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ Tienda</h1>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <Producto key={producto} producto={producto} onAgregar={agregarAlCarrito} />
        ))}
      </ul>
      <Carrito carrito={carrito} onEliminar={eliminarDelCarrito} />
    </div>
  );
}

export default App;




