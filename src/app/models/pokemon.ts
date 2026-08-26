export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  stats: { name: string; value: number }[];
}
