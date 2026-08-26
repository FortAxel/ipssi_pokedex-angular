import { PokemonList } from './pages/pokemon-list/pokemon-list';
import { PokemonDetail } from './pages/pokemon-detail/pokemon-detail';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PokemonList },
  { path: 'pokemon/:id', component: PokemonDetail },
];
