import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: Number;
  resultado: string;
  interpretacion: string;

  constructor(private root:ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +root.snapshot.paramMap.get('valor')!;
    console.log(this.bmi);
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal mayor al normal, intenta hacer un poco de ejercicio';
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal, ¡Buen trabajo!';
    }else{
      this.resultado = 'bajo de peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal, intenta comer un poco mas';
    }
  }
}
