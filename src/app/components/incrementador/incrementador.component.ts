import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 0;
  @Input() leyenda: string = 'Leyenda';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {
    if (this.progreso + valor > 100 ) {
      this.progreso = 100;
    } else if (this.progreso + valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso = this.progreso + valor;
    }
    this.cambioValor.emit(this.progreso);
  }

}
