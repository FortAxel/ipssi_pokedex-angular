import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../models/pokemon';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemonList(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListResponse>(`${this.apiUrl}?limit=20`)
      .pipe(
        map((response) =>
          response.results.map((item) => {
            const id = Number(item.url.split('/').filter(Boolean).pop());
            return {
              id,
              name: item.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            };
          }),
        ),
      );
  }
}
