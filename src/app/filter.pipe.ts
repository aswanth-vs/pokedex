import { Pipe, PipeTransform } from '@angular/core';
import { myPokemon } from 'src/assets/model';
import { ApiService } from './api.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private api: ApiService) {}

  img: any = '';
  transform(
    allPokemonData: any[],
    search: string,
    propertyName: string
  ): any[] {
    const result: any = [];
    if (!allPokemonData || propertyName == '' || search == '') {
      return allPokemonData;
    }

    allPokemonData.forEach((pokemon: any) => {
      if (
        pokemon[propertyName]
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      ) {
        // this.api.getPokemonData(pokemon.url).subscribe(
        //   (data: any) => {
        //     let type: any = [];
        //     data.types.forEach((element: any) => {
        //       type.push(element.type.name);
        //     });
        //     if (data.sprites.other.dream_world.front_default == null) {
        //       this.img = data.sprites.other['official-artwork'].front_default;
        //     } else {
        //       this.img = data.sprites.other.dream_world.front_default;
        //     }
        //     result.push({
        //       name: pokemon.name,
        //       image: this.img,
        //       url: pokemon.url,
        //       types: type,
        //     });
        //   },
        //   (error) => {
        //     throw error;
        //   }
        // );
        result.push(pokemon);
      }
    });
    console.log(result);
    return result;
  }
}

//
