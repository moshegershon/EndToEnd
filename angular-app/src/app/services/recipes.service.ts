import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipesmodel } from '../models/recipesmodel';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private httpClient: HttpClient, private socket:Socket) { }

  Getrecipes(): Observable <Recipesmodel[]>{
    return this.socket.fromEvent('message');
    debugger; 
     // return this.httpClient.get<Recipesmodel[]>('http://localhost:8888/Recipes');
   }

   notify() {
    return this.socket.emit('notify');
   }
  onClick(r: Recipesmodel): Observable<string> {
    return of('ok').pipe(map(()=>{
      console.log('added');
      this.socket.emit('message',r, () => {
        console.log('ok');
      });
      return 'ok';
    }));
}
    // return this.httpClient.post<string>('http://localhost:8888/Recipes', r);

};

