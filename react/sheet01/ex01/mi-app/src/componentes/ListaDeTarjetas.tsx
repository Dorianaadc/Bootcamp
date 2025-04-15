import React from 'react';
import Tarjeta from './Tarjeta';

type Persona = {
  nombre: string;
  apellido: string;
  ocupacion: string;
  imagenURL: string;
};

const ListaDeTarjetas: React.FC = () => {
  const personas: Persona[] = [
    {
      nombre: 'Dori',
      apellido: 'Da Costa',
      ocupacion: 'Desarrolladora Frontend',
      imagenURL: 'https://www.mediainteractiva.com/wp-content/uploads/2022/09/iStock-1322050853-1.jpg'
    },
    {
      nombre: 'Sofia',
      apellido: 'Martínez',
      ocupacion: 'Diseñador UX/UI',
      imagenURL: 'https://www.mediainteractiva.com/wp-content/uploads/2022/09/iStock-1322050853-1.jpg'
    },
    {
      nombre: 'Santi',
      apellido: 'Gómez',
      ocupacion: 'Programador',
      imagenURL: 'https://www.mediainteractiva.com/wp-content/uploads/2022/09/iStock-1322050853-1.jpg'
    }
  ];

  return (
    <div style={styles.container}>
      {personas.map((persona, index) => (
        <Tarjeta
          key={index}
          nombre={persona.nombre}
          apellido={persona.apellido}
          ocupacion={persona.ocupacion}
          imagenURL={persona.imagenURL}
        />
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

export default ListaDeTarjetas;

