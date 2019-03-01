import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }
  onClick(c: ContactModel): Observable<string>{
    console.log(c);
    return this.httpClient.post<string>('http://localhost:8888/contact', c);
  }
}
