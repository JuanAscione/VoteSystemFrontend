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

  constructor(private votosService: VotosService) { }

  ngOnInit() {
    this.getVotos();

    setInterval(() => {
      this.getVotos();
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

  calcularAltura(votos: number): string {
    const altura = votos * 10; // Ajusta el factor de escala según tus necesidades
    return `${altura}%`;
  }

}
