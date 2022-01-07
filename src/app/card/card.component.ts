import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  titulo: string | undefined;
  id:number | undefined;
  imagen: any;
  informacion: any;
  stats:any[] = [];

  constructor(private pokeService: PokemonService) { }


  ngOnInit(): void {
    this.getPoke();
  }
  getPoke(): void{
    this.pokeService.getPokemon(400)
      .subscribe(poke =>{

        this.titulo = poke.name;
        this.id = poke.id;
        this.informacion = `ID: ${this.id} Tipo: ${"".concat(
          ...poke.types.map((item: { type: { name: string; }; }) => item.type.name
        ).join(", "))}`;
        this.imagen = poke.sprites.front_default;
        this.stats.push(...poke.stats.map((stat: { base_stat: any; stat: { name: any; }; }) => {
          return { base_stat:stat.base_stat, name: stat.stat.name}
        }));
      });
  }
  
}
          