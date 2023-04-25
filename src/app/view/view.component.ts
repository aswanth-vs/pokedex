import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.pokeId = data.id;
      console.log(data.id);
      this.api.getAllData(this.pokeId).subscribe((result: any) => {
        this.pokemon = result;
        //getting pokemon category
        this.getPokemonCategory();
        this.pokemon.types.forEach((i: any) => {
          this.currentTypes.push(i.type.name);
        });
        console.log(this.pokemon);
        console.log(this.currentTypes);
        // document.body.style.background = this.currentTypes[0];
      });
    });
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  pokeId: any = '';
  pokeCategory: any = '';
  pokemon: any = {};
  url: string = '';
  weakness: any = ['bug', 'poison'];
  currentTypes: any = [];
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

  getWeakness() {
    this.currentTypes.forEach((type: any) => {
      // call the gender and weakness functions in AppComponent.ts file??
      //
      // 1.Create api to get damage relations of each type?
      // 2.Then push the weakness of each type to an array after checking to see if it wasn't already there.
      //             OR
      // 1.Create individual arrays to store weaknesses of each type in the service file (Array of objects)
      // 2.Create an api call to push the weaknesses of each type into it's respective array
      // 3.Use that array to push weaknesses of each type of the current pokemon to an array after checking to see if it wasn't already there
    });
  }

  // to get gender
  // 1. create a gender function to see which genders are available to a pokemon.
  // 2. during ngOnInit pass the pokemon name to the gender function
  // 3. assign a flag to mark the genders present.
  // 4. use that flag in the html.

  getPokemonCategory() {
    this.api.getCategory(this.pokeId).subscribe((result: any) => {
      result.genera.forEach((item: any) => {
        if (item.language.name == 'en') {
          this.pokeCategory = item.genus;
          // console.log(this.pokeCategory);
        }
      });
    });
  }
}
