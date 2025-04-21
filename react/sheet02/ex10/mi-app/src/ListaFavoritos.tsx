import { useState } from 'react'
import ElementoLista from './ElementoLista.tsx'

function ListaFavoritos() {
  const elementos = ['El Señor de los Anillos', 'Harry Potter', 'Star Wars', 'Matrix']
  const [favoritos, setFavoritos] = useState<string[]>([])

  const añadirAFavoritos = (titulo: string) => {
    if (!favoritos.includes(titulo)) {
      setFavoritos(prev => [...prev, titulo])
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Películas</h2>
      {elementos.map((titulo) => (
        <ElementoLista key={titulo} titulo={titulo} onFavorito={añadirAFavoritos} />
      ))}

      <h3>Favoritos:</h3>
      <ul>
        {favoritos.map((fav, i) => (
          <li key={i}>{fav}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaFavoritos
