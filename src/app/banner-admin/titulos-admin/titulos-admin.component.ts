import { Component , OnInit} from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-titulos-admin',
  templateUrl: './titulos-admin.component.html',
  styleUrls: ['./titulos-admin.component.css']
})
export class TitulosAdminComponent implements OnInit {
  mostrarTitulos:boolean = true;

  infoUsuario: any;
  id: any;
  titulosUsuario: any[] = [];

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
      this.personaService.recibirDatos().subscribe(data =>{
        console.log(data)
        this.infoUsuario = data;
        this.titulosUsuario = data.titulos
        this.id = data.titulos.id
      })
  }
}
