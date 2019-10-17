import { NgModule } from '@angular/core';


// Modulos
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficadonaComponent } from '../components/graficadona/graficadona.component';
// Rutas
import { PAGES_ROUTES } from './pagers.routes';

// Charts
import { ChartsModule } from 'ng2-charts';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementadorComponent,
    GraficadonaComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule,
      FormsModule,
      CommonModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ]
})

export class PagesModule {}
