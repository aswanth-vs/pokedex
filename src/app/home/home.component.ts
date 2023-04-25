import {
  AfterViewInit,
  Component,
  ElementRef,
  ErrorHandler,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.searchPokemon();
    console.log(this.allPokemonData);
  }

  ngAfterViewInit() {}
  allPokemonData: any = [];

  //Search key must be initialised to empty string. Otherwise filter will not work when page is rendered
  temp: any = {
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    types: ['grass', 'poison'],
  };
  search: any = '';
  img: any = '';
  type: any = ['bug', 'poison'];
  weakness: any = ['bug', 'poison'];
  allTypes: any = [
    'bug',
    'dragon',
    'fairy',
    'fire',
    'ghost',
    'ground',
    'normal',
    'psychic',
    'steel',
    'dark',
    'electric',
    'fighting',
    'flying',
    'grass',
    'ice',
    'poison',
    'rock',
    'water',
  ];

  //Works during button click
  searchPokemon() {
    for (let i = 1; i < 1009; i++) {
      this.api.getAllData(i).subscribe((data: any) => {
        let type: any = [];
        data.types.forEach((element: any) => {
          type.push(element.type.name);
        });
        if (data.sprites.other.dream_world.front_default == null) {
          this.img = data.sprites.other['official-artwork'].front_default;
        } else {
          this.img = data.sprites.other.dream_world.front_default;
        }
        this.allPokemonData.push({
          name: data.forms[0].name,
          image: this.img,
          url: `https://pokeapi.co/api/v2/pokemon/${i}`,
          types: type,
        });
      });
    }
  }

  errorDisplay: string = 'hidden';

  constructor(private api: ApiService) {}

  //

  // apiGet(term: any) {
  //   if (term.isNan) {
  //     // If you searched, then this will work.
  //     term = term.toLowerCase();
  //   }

  //   this.api.getPokemonData(term).subscribe(
  //     (result: any) => {
  //       console.log('yey', result);
  //       this.errorDisplay = 'hidden';
  //       console.log(result.weight);
  //     },
  //     (error) => {
  //       console.log('lol', error);
  //       this.errorDisplay = 'show';
  //     }
  //   );
  // }
}
