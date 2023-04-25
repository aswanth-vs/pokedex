import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getPokemonData(term: any) {
  //   return this.http.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
  // }

  // pokemonInfo = {
  //   name: '',
  //   image: '',
  // };

  // getPokemonData(url: any) {
  //   return this.http.get(`${url}`);
  // }

  getAllData(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  //get a Pokemon's category
  getCategory(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}
