import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonDetailResponse, PokemonDetails, PokemonListResponse } from '../models/pokemon';
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

  getPokemonById(id: number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}/${id}`).pipe(
      map((response) => ({
        id: response.id,
        name: response.name,
        imageUrl: response.sprites.front_default ?? '',
        types: response.types.map((entry) => entry.type.name),
        stats: response.stats.map((entry) => ({
          name: entry.stat.name,
          value: entry.base_stat,
        })),
      })),
    );
  }
}
