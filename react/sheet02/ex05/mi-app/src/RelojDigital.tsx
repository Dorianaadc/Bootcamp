import { useEffect, useState } from 'react'

function RelojDigital() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)

   
    return () => clearInterval(intervalo)
  }, [])

  const horaFormateada = hora.toLocaleTimeString()

  return (
    <div style={estiloReloj}>
      <h2>Reloj Digital</h2>
      <p>{horaFormateada}</p>
    </div>
  )
}

const estiloReloj = {
  backgroundColor: '#222',
  color: 'lime',
  padding: '20px',
  borderRadius: '10px',
  fontFamily: 'monospace',
  fontSize: '2em',
  textAlign: 'center' as const
}

export default RelojDigital
