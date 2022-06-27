import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../consultorio/models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  private urlBase = 'https://localhost:44380/api/Persona';

  getAllPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlBase)
  }
}
