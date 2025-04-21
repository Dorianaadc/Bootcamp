import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Incrementar y Descrementar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Descrementar
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset 
        </button>
         <p>{count}</p>
      </div>
    </>
  )
}

export default App
