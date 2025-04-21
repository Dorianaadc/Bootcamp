type ProductoProps = {
    producto: string;
    onAgregar: (producto: string) => void;
  };
  
  function Producto({ producto, onAgregar }: ProductoProps) {
    return (
      <li style={{ marginBottom: '10px' }}>
        {producto}
        <button onClick={() => onAgregar(producto)} style={{ marginLeft: '10px' }}>
          Añadir al carrito
        </button>
      </li>
    );
  }
  
  export default Producto;
  