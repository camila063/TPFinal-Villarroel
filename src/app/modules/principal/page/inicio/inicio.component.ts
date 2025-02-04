import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  // propiedad publica (tipo array)
 public datos: Card[];

 // se inicia la propiedad datos
 constructor(){
   this.datos = [
     {
       id: "",
       album: "Rust In Peace",
       artista: "Megadeth",
       imagen:"https://upload.wikimedia.org/wikipedia/en/d/dc/Megadeth-RustInPeace.jpg",
     },
     {
       id: "",
       album: "Ride The Lighting",
       artista: "Metallica",
       imagen:"https://http2.mlstatic.com/D_NQ_NP_892417-MLU54983082960_042023-O.webp",
     },
     {
       id: "",
       album: "Fear of The Dark",
       artista: "Iron Maiden",
       imagen:"https://akamai.sscdn.co/letras/360x360/albuns/4/5/f/d/204511628624872.jpg",
     },
     
     {
       id: "",
       album: "Painkiller",
       artista: "Judas Priest",
       imagen:"https://upload.wikimedia.org/wikipedia/en/1/16/Judaspainkiller.JPG",
     },
     {
       id: "",
       album: "Agent Orange",
       artista: "Sodom",
       imagen:"https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/06/468330a486e27c0026745c92e7ec1725.1000x1000x1.jpg?fit=1000%2C1000&ssl=1",
     },
     {
       id: "",
       album: "Rise of Chaos",
       artista: "Accept",
       imagen:"https://upload.wikimedia.org/wikipedia/en/a/a6/Accepttheriseofchaoscdcover.png",
     },
     {
       id: "",
       album: "Kings of Metal",
       artista: "Manowar",
       imagen:"https://lastfm.freetls.fastly.net/i/u/500x500/fffd80a10caa4446c4e6e0b239f076ab.jpg",
     },
     {
       id: "",
       album: "Follow the Leader",
       artista: "Korn",
       imagen:"https://upload.wikimedia.org/wikipedia/en/5/52/Korn_follow_the_leader.jpg",
     },
     {
       id: "",
       album: "Iowa",
       artista: "Slipknot",
       imagen:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Slipknot_Iowa.jpg/220px-Slipknot_Iowa.jpg",
     },
     {
       id: "",
       album: "The Empire",
       artista: "Vader",
       imagen:"https://upload.wikimedia.org/wikipedia/en/5/59/Vader_The_Empire.jpg",

     },
     
   ]
 }


 ngOnInit(): void{
 }
}