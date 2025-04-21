import { useEffect, useState } from 'react'

function ScrollTracker() {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const manejarScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', manejarScroll)

    return () => {
      window.removeEventListener('scroll', manejarScroll)
    }
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Control de Scroll</h2>
      <p>Scroll vertical: <strong>{Math.round(scrollY)}px</strong></p>

      {}
      <div style={{ height: '2000px', background: 'linear-gradient(#fff, #ccc)' }} />
    </div>
  )
}

export default ScrollTracker
