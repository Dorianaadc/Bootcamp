import React from 'react';

type TarjetaProps = {
  nombre: string;
  apellido: string;
  ocupacion: string;
  imagenURL: string;
};

const Tarjeta: React.FC<TarjetaProps> = ({ nombre, apellido, ocupacion, imagenURL }) => {
  return (
    <div style={styles.card}>
      <img src={imagenURL} alt={`${nombre} ${apellido}`} style={styles.image} />
      <h2>{nombre} {apellido}</h2>
      <p>{ocupacion}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%'
  }
};

export default Tarjeta;