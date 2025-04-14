import React from 'react';

interface Tarjeta {
nombre: string;
apellido: string;
ocupacion: string;
imagen: string;
}

const Tarjeta: React.FC<Tarjeta> = ({ nombre, apellido, ocupacion, imagen }) => {
return (
<div className="card">
<img src={imagen} className='image' alt={`${nombre} ${apellido} ${ocupacion}`} />
<h2>{nombre} {apellido} {ocupacion}</h2>
</div>
);
};


export default Tarjeta;






