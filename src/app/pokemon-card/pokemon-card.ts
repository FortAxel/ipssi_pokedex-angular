import { Component, input } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-card',
  styleUrl: './pokemon-card.css',
  templateUrl: './pokemon-card.html',
})
export class PokemonCard {
  pokemon = input.required<Pokemon>();
}
