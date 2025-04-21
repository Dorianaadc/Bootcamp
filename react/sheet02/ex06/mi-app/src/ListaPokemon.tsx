import { useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

function ListaPokemon() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    console.log('Cargando pokemones...')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Pokemones recibidos:', data.results)
        setPokemones(data.results)
        setCargando(false)
      })
      .catch(error => {
        console.error('Error al obtener los pokemones:', error)
        setCargando(false)
      })
  }, [])

  return (
    <div style={estiloContenedor}>
      <h2>Lista de Pokemones</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul style={estiloLista}>
          {pokemones.map((pokemon, index) => (
            <li key={index} style={estiloItem}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const estiloContenedor = {
  padding: '20px',
  fontFamily: 'Arial',
}

const estiloLista = {
  listStyle: 'none',
  padding: 0,
}

const estiloItem = {
  background: '#f0f0f0',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '8px',
  textTransform: 'capitalize' as const,
}

export default ListaPokemon


