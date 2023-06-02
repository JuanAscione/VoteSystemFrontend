import {Component, OnInit} from '@angular/core';
import {VotosService} from "../service/votos.service";

export interface Voto {
  opcion: string;
  cantidad: number;
}

@Component({
  selector: 'app-lista-votos',
  templateUrl: './lista-votos.component.html',
  styleUrls: ['./lista-votos.component.css']
})
export class ListaVotosComponent implements OnInit{

  votos!: Voto[];
  totalVotos : number = 0;

  constructor(private votosService: VotosService) { }

  ngOnInit() {
    this.getVotos();

    setInterval(() => {
      this.totalVotos = 0;
      this.getVotos();
      for (let i = 0; i < this.votos.length; i++) {
        this.totalVotos = this.totalVotos + this.votos[i].cantidad;
      }
      console.log(this.totalVotos);
    }, 5000); // Actualiza cada 5 segundos (ajusta según tus necesidades)
  }


  getVotos() {
    this.votosService.getVotos().subscribe(
      (res) => {
        this.votos = res;
        console.log(res);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  calcularAltura(votos: number): number {
    const altura = votos * 100 / this.totalVotos; // Ajusta el factor de escala según tus necesidades
    return altura;
  }

}
