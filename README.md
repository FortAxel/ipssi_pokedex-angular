# Pokédex

**Nom :** FORTUNATO  
**Prénom :** Axel

## Description

Application Angular de Pokédex utilisant l’API publique [PokeAPI](https://pokeapi.co/).  
Recherche par nom en direct, affichage sous forme de cartes, page de détail avec types et statistiques.

## Lancer le projet

```bash
npm install
ng serve
```

Ouvrir [http://localhost:4200/](http://localhost:4200/) dans le navigateur.

## Choix techniques

- Service Angular dédié (`HttpClient`) pour les appels API, séparés des composants.
- Deux interfaces d’affichage : `Pokemon` (carte) et `PokemonDetails` (page détail). On n’a pas gardé que le modèle détaillé : la liste n’a ni types ni stats. Un seul gros type aurait forcé des champs vides sur les cartes. Ces infos n’arrivent qu’avec l’appel de la page détail.
- Router pour la page de détail (`/pokemon/:id`).
- `pokemon-list` est une **page** (l’accueil), plutôt qu’un composant `Home` générique qui n’apporterait rien de plus.

## Aide IA

Je me suis aidé d’une IA pour le **style CSS / mise en page** (rapprochement de la maquette du TP, adaptation desktop), le résultat sans mise en page IA est dans les commits précédents.  
Le reste (architecture, service, composants, routage, recherche) a été fait à l’aide du cours et du TP.
