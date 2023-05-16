import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient ) { }

  getWord(){
    return this.http.get<any>("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
