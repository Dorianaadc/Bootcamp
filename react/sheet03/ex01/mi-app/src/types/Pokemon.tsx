export interface PokemonSummary {
    name: string;
    url: string;
  }
  
  export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface PokemonDetail {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
  }
  