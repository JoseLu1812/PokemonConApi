import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from "../interfaces/pokemon-response.interface";

@Component({
  selector: 'app-pokemponent',
  templateUrl: './pokemponent.component.html',
  styleUrls: ['./pokemponent.component.css']
})
export class PokemponentComponent implements OnInit {

  listadoPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });
  }

}
