import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public places =[
    {name:"zurich",icon:"../../../../assets/icons/zurich.webp", dist:"3.5 horas de ruta" },
    {name:"geneva",icon:"../../../../assets/icons/geneva.webp", dist: "15 minutos de ruta"},
    {name:"lugano",icon:"../../../../assets/icons/lugano.webp" , dist:"2 horas de ruta"},
    {name:"lausanne",icon:"../../../../assets/icons/lausanne.webp", dist:"1 hora de ruta" }
  ];
  public items = [
    {name:"escapadas en plena naturaleza", icon:"../../../../assets/icons/home-001.webp"},
    {name:"alojamientos unicos", icon:"../../../../assets/icons/home-002.webp"},
    {name:"Viviendas enteras ", icon:"../../../../assets/icons/home-003.webp"},
    {name:"Se aceptan mascotas", icon:"../../../../assets/icons/home-004.webp"},
  ];

}
