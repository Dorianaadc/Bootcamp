import { useState } from 'react'

function FormularioLogin() {
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [errores, setErrores] = useState<{ email: string; contrasena: string }>({
    email: '',
    contrasena: '',
  })

  const validarEmail = (email: string) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(email)
  }

  const validarContrasena = (contrasena: string) => {
    return contrasena.length >= 6
  }

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nuevosErrores = { email: '', contrasena: '' }

    if (!validarEmail(email)) {
      nuevosErrores.email = 'Por favor, ingresa un email válido.'
    }

    if (!validarContrasena(contrasena)) {
      nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres.'
    }

    setErrores(nuevosErrores)

    if (!nuevosErrores.email && !nuevosErrores.contrasena) {
      console.log('Formulario enviado correctamente')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu email"
            required
          />
          {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />
          {errores.contrasena && <p style={{ color: 'red' }}>{errores.contrasena}</p>}
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default FormularioLogin