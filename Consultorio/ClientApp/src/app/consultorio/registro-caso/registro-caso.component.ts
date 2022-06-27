import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IndexedAccessType } from 'typescript';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro-caso',
  templateUrl: './registro-caso.component.html',
  styleUrls: ['./registro-caso.component.css']
})
export class RegistroCasoComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) {
    
   }
   personas:Persona[];
   persona:Persona;
   item:number;
  ngOnInit(): void {
    this.usuarioService.getAllPersonas().subscribe(result => {
            this.personas = result;
  })
  }

  
}
