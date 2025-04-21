import { useState } from 'react'
import ImagenMiniatura from './ImagenMiniatura.tsx'

function GaleriaImagenes() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>('')

  const imagenes = [
    'https://via.placeholder.com/150/0000FF/808080?Text=Imagen+1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Imagen+2',
    'https://via.placeholder.com/150/00FF00/FFFFFF?Text=Imagen+3',
    'https://via.placeholder.com/150/FFFF00/000000?Text=Imagen+4',
  ]

  const cambiarImagen = (imagen: string) => {
    setImagenSeleccionada(imagen)
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Galería de Imágenes</h2>
      {imagenSeleccionada && (
        <div>
          <h3>Imagen Seleccionada</h3>
          <img
            src={imagenSeleccionada}
            alt="Imagen ampliada"
            style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
          />
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {imagenes.map((imagen, index) => (
          <ImagenMiniatura key={index} imagen={imagen} onClick={cambiarImagen} />
        ))}
      </div>
    </div>
  )
}

export default GaleriaImagenes
