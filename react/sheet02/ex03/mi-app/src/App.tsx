import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState<string[]>([]) 
  const [input, setInput] = useState('')  

  const agregarTarea = () => {
    if (input.trim()) {
      setTareas([...tareas, input])
      setInput('')
    }
  }

  const eliminarTarea = (index: number) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index)
    setTareas(nuevasTareas)
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <input 
        type="text"  
        id='tarea' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una tarea" />
      <button onClick={agregarTarea}>Agregar</button>

      <ul id='lista'>
        {tareas.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
