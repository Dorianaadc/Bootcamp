import React, { useEffect, useState } from 'react';
import { conexionApi, actualizarPokemon } from '../services/PokemonService.tsx';
import { IPokemonDetail, IPokemon } from '../types/Pokemon.tsx';
import PokemonCard from './TarjetasPokemon.tsx';
import InformacionPokemon from './InformacionPokemon.tsx';

const FiltradoInformacionPokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonDetail[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDetail | null>(null);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await conexionApi();
      const details = await Promise.all(
        data.results.map((p: IPokemon) => actualizarPokemon(p.url))
      );
      setPokemons(details);
    };

    getPokemons();
  }, []);

  const filtrarPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectPokemon = (pokemon: IPokemonDetail) => {
    setSelectedPokemon(pokemon);
  };
  
  const handleBackToList = () => {
    setSelectedPokemon(null);
  };

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
          disabled={!!selectedPokemon}
        />
      </div>
  
      {selectedPokemon ? (
        <div >
          <InformacionPokemon/>
          <div className="botones">
            <button className="boton" onClick={handleBackToList}>
              Volver al listado
            </button>
          </div>
        </div>
      ) : (
        <div className="tarjetas">
          {filtrarPokemons.map((pokemon) => (
            <div key={pokemon.id} onClick={() => handleSelectPokemon(pokemon)}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};  

export default FiltradoInformacionPokemon;

