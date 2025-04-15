import React from 'react';
import Producto from './Producto';

type Product = {
  nombre: string;
  precio: string;
  descripcion: string;
};

const ListaDeProductos: React.FC = () => {
  const product: Product[] = [
    {
      nombre: 'fresa',
       precio: '2.00',
       descripcion: 'fruta roja saludable'
    },
    {
        nombre: 'banana',
         precio: '1.00',
         descripcion: 'fruta amarilla saludable'
      },
      {
        nombre: 'mango',
         precio: '3.00',
         descripcion: 'fruta naranja saludable'
      },
      {
        nombre: 'pera',
         precio: '4.00',
         descripcion: 'fruta verde saludable'
      }
  ];

  return (
    <div >
      {product.map((articulo, index) => (
        <Producto
          key={index}
          nombre={articulo.nombre}
          precio={articulo.precio}
          descripcion={articulo.descripcion}
        />
      ))}
    </div>
  );
};

export default ListaDeProductos;

