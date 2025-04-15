import React from 'react';

type ProductoProps = {
  nombre: string;
  precio: string;
  descripcion: string;
};

const Producto: React.FC<ProductoProps> = ({ nombre, precio,descripcion }) => {
  return (
    <div >
      <p>{nombre} {precio} {descripcion}</p>
    </div>
  );
};

export default Producto;