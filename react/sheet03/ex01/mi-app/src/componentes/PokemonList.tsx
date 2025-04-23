import React, { useEffect, useState } from 'react';
import { conexionApi, actualizarPokemon } from '../services/PokemonService.tsx';
import { PokemonDetail, PokemonSummary } from '../types/Pokemon';
import PokemonCard from './PokemonCards.tsx';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPokemons = async () => {
      const data = await conexionApi();
      const details = await Promise.all(
        data.results.map((p: PokemonSummary) => actualizarPokemon(p.url))
      );
      setPokemons(details);
    };

    getPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="filtrador">
        <input
          type="search"
          name="filtrar"
          id="filtrar"
          placeholder="Filtra pokemons por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="tarjetas">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

