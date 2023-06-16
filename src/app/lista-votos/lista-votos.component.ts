import {Component, OnInit} from '@angular/core';
import {VotosService} from "../service/votos.service";
import Chart from 'chart.js/auto';

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
  public chart: any;
  datasets: any
  datasetPrueba = {
    label: "",
    data: [""],
    backgroundColor: ""
  }

  constructor(private votosService: VotosService) {
    this.datasets = [];
  }

  ngOnInit() {
    this.getVotos();
    setInterval(() => {
      this.totalVotos = 0;
      this.getVotos();
      for (let i = 0; i < this.votos.length; i++) {
        this.totalVotos = this.totalVotos + this.votos[i].cantidad;
      }
      console.log(this.totalVotos);
    }, 50000); // Actualiza cada 5 segundos (ajusta según tus necesidades)

  }


  getVotos() {
    this.votosService.getVotos().subscribe(
      (res) => {
        this.votos = res;
        console.log(res);
        this.createChart(this.votos);
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

  createChart(votosAMostrar: Voto[]){

    console.log(this.calcularAltura(votosAMostrar[0].cantidad).toString());

    if (this.chart) {
      this.chart.destroy();
    }

    for (let i = 0; i < votosAMostrar.length; i++) {
      const dataset = {
        label: votosAMostrar[i].opcion,
        data: [votosAMostrar[i].cantidad.toString()],
        backgroundColor: getColorForIndex(i)
      };

      this.datasets.push(dataset);
    }

    function getColorForIndex(index: number) {
      const colors = ['blue', 'limegreen', 'red'];
      return colors[index % colors.length];
    }

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["Primera Ronda"],
        datasets: this.datasets
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
