import { NgIf } from '@angular/common';
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
   p: Persona;
   item:number;
  ngOnInit(): void {
    this.usuarioService.getAllPersonas().subscribe(result => {
            this.personas = result;
  })
  }
  


  getPersona(persona:Persona|number): any {

    this.usuarioService.getPersonas(persona).subscribe(result => {
      this.p = result;
      console.log(this.p);
    })
    
  }
  deletePersonas(persona: Persona|number): void {
    this.usuarioService.deletePersonas(persona).subscribe(result => {
      this.persona = result;
      console.log('eliminado')
      window.location.reload();
      
    })

    
  }

  
}
