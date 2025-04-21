interface ImagenMiniaturaProps {
    imagen: string
    onClick: (imagen: string) => void
  }
  
  function ImagenMiniatura({ imagen, onClick }: ImagenMiniaturaProps) {
    return (
      <div style={{ margin: '10px' }}>
        <img
          src={imagen}
          alt="Miniatura"
          style={{ width: '100px', height: 'auto', cursor: 'pointer', borderRadius: '8px' }}
          onClick={() => onClick(imagen)}
        />
      </div>
    )
  }
  
  export default ImagenMiniatura
  