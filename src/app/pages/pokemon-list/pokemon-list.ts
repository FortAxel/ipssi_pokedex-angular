import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonCard } from '../../pokemon-card/pokemon-card';
import { PokemonService } from '../../services/pokemonService';

@Component({
  imports: [PokemonCard],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList implements OnInit {
  private readonly pokemonService = inject(PokemonService);
  loading = signal(true);

  pokemons = signal<Pokemon[]>([]);
  searchTerm = signal('');

  filteredPokemons = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.pokemons();
    }
    return this.pokemons().filter((pokemon) => pokemon.name.toLowerCase().includes(term));
  });

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (liste) => {
        this.pokemons.set(liste);
        this.loading.set(false);
      }
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
