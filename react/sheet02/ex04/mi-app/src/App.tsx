import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState<string[]>([])

  const cambiarColor = () =>{
  } 

  return (
    <>
    <div className='semaforo'>
    <div className='rojo' {...color}>Rojo</div>
    <div className='amarillo' {...color}>Amarillo</div>
    <div className='verde'{...color}>Verde</div>
    </div>
    <button onClick={cambiarColor}>Cambiar</button>
    </>
  )
}

export default App
