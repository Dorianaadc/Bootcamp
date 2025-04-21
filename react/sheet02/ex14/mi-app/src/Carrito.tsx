type CarritoProps = {
    carrito: string[];
    onEliminar: (producto: string) => void;
  };
  
  function Carrito({ carrito, onEliminar }: CarritoProps) {
    return (
      <div>
        <h2>🛒 Carrito</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto}
                <button onClick={() => onEliminar(producto)} style={{ marginLeft: '10px' }}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Carrito;