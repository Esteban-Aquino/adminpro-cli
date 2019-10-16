import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtprogress', {static: false}) txtProgreso: ElementRef;
  @Input() progreso: number = 0;
  @Input() leyenda: string = 'Leyenda';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(valor: number) {
    // const elementHTML: any = document.getElementsByName('progreso')[0];
    if ( valor > 100 ) {
      this.progreso = 100;
    } else if (valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }
    // elementHTML.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
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
    this.txtProgreso.nativeElement.focus();
  }

}
