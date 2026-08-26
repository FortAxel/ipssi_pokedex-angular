import { Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonService } from '../services/pokemonService';

@Component({
  imports: [PokemonCard],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList implements OnInit {
  private readonly pokemonService = inject(PokemonService);

  pokemons = signal<Pokemon[]>([]);

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (liste) => this.pokemons.set(liste),
    });
  }
}
