import { useEffect, useState } from 'react'

function TemaOscuroClaro() {
  const [temaOscuro, setTemaOscuro] = useState(false)

  useEffect(() => {
    if (temaOscuro) {
      document.body.classList.add('oscuro')
      document.body.classList.remove('claro')
    } else {
      document.body.classList.add('claro')
      document.body.classList.remove('oscuro')
    }
    return () => {
      document.body.classList.remove('oscuro')
      document.body.classList.remove('claro')
    }
  }, [temaOscuro])

  const alternarTema = () => {
    setTemaOscuro(prev => !prev)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Tema {temaOscuro ? 'Oscuro' : 'Claro'}</h2>
      <button onClick={alternarTema}>
        Cambiar a tema {temaOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  )
}

export default TemaOscuroClaro