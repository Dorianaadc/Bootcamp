import { useState } from 'react'
import './App.css'

function App() {
  const [enviar, setEnviar] = useState('')

  const manejarEnvio = (e: any) => {
    e.preventDefault()
    setEnviar('Formulario enviado con éxito')
  }

  return (
    <>
<div>
  <form onSubmit={manejarEnvio} >
    <label htmlFor="name">Nombre:</label>
    <input type="text" id='nombre'/> <br></br>
    <label htmlFor="name">Email:</label>
    <input type="text" id='email'/><br></br>
    <label htmlFor="name">Contraseña:</label>
    <input type="text" id='Contraseña'/><br></br>
    <button type='submit'>Enviar</button>
  </form>
    <p>{enviar}</p>
</div>
    </>
  )
}

export default App



