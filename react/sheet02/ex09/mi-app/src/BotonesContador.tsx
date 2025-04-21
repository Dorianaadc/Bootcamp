interface BotonesContadorProps {
    onIncrementar: () => void
    onDecrementar: () => void
    onReiniciar: () => void
  }
  
  function BotonesContador({ onIncrementar, onDecrementar, onReiniciar }: BotonesContadorProps) {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={onIncrementar}>Incrementar</button>
        <button onClick={onDecrementar}>Decrementar</button>
        <button onClick={onReiniciar}>Reiniciar</button>
      </div>
    )
  }
  
  export default BotonesContador