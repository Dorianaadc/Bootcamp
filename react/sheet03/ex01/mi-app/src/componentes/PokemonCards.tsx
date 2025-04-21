import React, { useEffect, useState } from 'react';
import { PokemonDetail } from '../types/Pokemon.tsx';
import { getEvolucion } from '../services/PokemonService.tsx';

interface Props {
  pokemon: PokemonDetail;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const [evolucionaDe, setEvolucionaDe] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvolucion = async () => {
      const evolucionData = await getEvolucion(pokemon.id);

      if (evolucionData) {
        const cadena = evolucionData.chain;
        let nombres: string[] = [cadena.species.name];

        let actual = cadena;
        while (actual.evolves_to.length > 0) {
          actual = actual.evolves_to[0];
          nombres.push(actual.species.name);
        }

        const posicion = nombres.indexOf(pokemon.name.toLowerCase());
        if (posicion > 0) {
          setEvolucionaDe(nombres[posicion - 1]);
        }
      }
    };

    fetchEvolucion();
  }, [pokemon]);

  return (
    <div className="tarjeta">
      <div className="contenido">
        <div className="imagen">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="texto-imagen">ID / {pokemon.id}</div>
        </div>
        <p>{pokemon.name}</p>
        <div className="botones">
          {pokemon.types.map((tipo, idx) => (
            <button key={idx} className="boton">{tipo.type.name}</button>
          ))}
        </div>
        {evolucionaDe && (
          <div className="evolucion">
            <p style={{ color: "#a17a2f", fontSize: "12px" }}>Evoluciona de:</p>
            <p>{evolucionaDe}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
