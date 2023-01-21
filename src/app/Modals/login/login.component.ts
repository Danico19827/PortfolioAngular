import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any;
  constraseña: any;
  

  constructor(private personaService:PersonaService) { }
   

  ngOnInit() :void {
      this.personaService.recibirDatos().subscribe( data =>{
      console.log(data);
      this.constraseña = data.constraseña;
      this.usuario = data.usuario;
    })
  }

}
