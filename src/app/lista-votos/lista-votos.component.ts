import {Component, OnInit} from '@angular/core';
import {VotosService} from "../service/votos.service";

@Component({
  selector: 'app-lista-votos',
  templateUrl: './lista-votos.component.html',
  styleUrls: ['./lista-votos.component.css']
})
export class ListaVotosComponent implements OnInit{

  votos!: any[];

  constructor(private votosService: VotosService) { }

  ngOnInit() {
    this.getVotos();
  }

  getVotos() {
    this.votosService.getVotos().subscribe(
      (res) => {
        this.votos = res.votos;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
