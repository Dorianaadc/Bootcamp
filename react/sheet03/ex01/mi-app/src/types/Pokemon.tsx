export interface IPokemon {
    name: string;
    url: string;
  }
  
  export interface IPokemonType {
    type: {
      name: string;
    };
  }
  
  export interface IPokemonDetail {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: IPokemonType[];
  }
  