import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(id: number): Observable<any> {
    const url = `${this.pokeUrl}/${id}`;
    return this.http.get(url)
  }
}
