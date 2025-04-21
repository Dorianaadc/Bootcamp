import React, { useEffect, useState } from 'react';
import { conexionApi, actualizarPokemon } from '../services/PokemonService.tsx';
import { PokemonDetail, PokemonSummary } from '../types/Pokemon';
import PokemonCard from './PokemonCards.tsx';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

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

  return (
    <div className="tarjetas">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
