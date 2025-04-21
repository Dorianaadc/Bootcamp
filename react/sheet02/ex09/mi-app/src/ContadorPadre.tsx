import { useState } from 'react'
import BotonesContador from './BotonesContador.tsx'

function ContadorPadre() {
  const [contador, setContador] = useState(0)

  const incrementar = () => setContador(prev => prev + 1)
  const decrementar = () => setContador(prev => prev - 1)
  const reiniciar = () => setContador(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Contador: {contador}</h2>
      <BotonesContador
        onIncrementar={incrementar}
        onDecrementar={decrementar}
        onReiniciar={reiniciar}
      />
    </div>
  )
}

export default ContadorPadre