import { useState } from 'react'
import './App.css'

function App() {
  const colores = ['rojo', 'amarillo', 'verde']
  const [indice, setIndice] = useState(0)

  const cambiarColor = () => {
    setIndice((indice + 1) % colores.length)
  }

  return (
    <>
      <div className='semaforo'>
        <div className={`luz rojo ${indice === 0 ? 'activo' : ''}`}></div>
        <div className={`luz amarillo ${indice === 1 ? 'activo' : ''}`}></div>
        <div className={`luz verde ${indice === 2 ? 'activo' : ''}`}></div>
      </div>
      <button onClick={cambiarColor}>Siguiente</button>
    </>
  )
}

export default App


