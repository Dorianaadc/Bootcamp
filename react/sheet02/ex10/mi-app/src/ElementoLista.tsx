interface ElementoListaProps {
    titulo: string
    onFavorito: (titulo: string) => void
  }
  
  function ElementoLista({ titulo, onFavorito }: ElementoListaProps) {
    return (
      <div style={{ marginBottom: '10px' }}>
        {titulo}
        <button onClick={() => onFavorito(titulo)} style={{ marginLeft: '10px' }}>
          Añadir a favoritos
        </button>
      </div>
    )
  }
  
  export default ElementoLista
  