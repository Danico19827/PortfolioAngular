import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-mi-informacion-admin',
  templateUrl: './mi-informacion-admin.component.html',
  styleUrls: ['./mi-informacion-admin.component.css']
})

export class MiInformacionAdminComponent implements OnInit {
  
  nombre:any;
  edad:any;
  descripcion:any;
  foto:any;
  

  constructor(private personaService:PersonaService) { }
   

  ngOnInit() :void {
      this.personaService.recibirDatos().subscribe( data =>{
      console.log(data);
      this.nombre = data.nombre;
      this.edad = data.edad;
      this.descripcion = data.descripcion;
      this.foto = data.fotoPerfil;
    })
  }

}


