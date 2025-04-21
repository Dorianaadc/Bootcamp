import { useEffect, useState } from 'react'

function AdivinaNumero() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero())
  const [intento, setIntento] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [intentos, setIntentos] = useState(0)
  const [ganador, setGanador] = useState(false)

  function generarNumero() {
    return Math.floor(Math.random() * 100) + 1 // Número del 1 al 100
  }

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntento(e.target.value)
  }

  const verificarIntento = () => {
    const intentoNumero = parseInt(intento)
    if (isNaN(intentoNumero)) {
      setMensaje('Introduce un número válido.')
      return
    }

    setIntentos(prev => prev + 1)

    if (intentoNumero === numeroSecreto) {
      setMensaje(`¡Correcto! El número era ${numeroSecreto}. ¡Lo lograste en ${intentos + 1} intentos!`)
      setGanador(true)
    } else if (intentoNumero < numeroSecreto) {
      setMensaje('Demasiado bajo.')
    } else {
      setMensaje('Demasiado alto.')
    }
  }

  useEffect(() => {
    if (ganador) {
      const temporizador = setTimeout(() => {
        setNumeroSecreto(generarNumero())
        setIntento('')
        setMensaje('Nuevo número generado. ¡A jugar otra vez!')
        setIntentos(0)
        setGanador(false)
      }, 3000)
      return () => clearTimeout(temporizador)
    }
  }, [ganador])

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🎯 Adivina el Número</h2>
      <p>Estoy pensando en un número del 1 al 100</p>
      <input
        type="number"
        value={intento}
        onChange={manejarCambio}
        disabled={ganador}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={verificarIntento} disabled={ganador}>
        Intentar
      </button>
      <p>{mensaje}</p>
      <p>Intentos: {intentos}</p>
    </div>
  )
}

export default AdivinaNumero


