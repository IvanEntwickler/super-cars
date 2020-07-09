import { CarConfigItemsComponent } from './car-configuration/car-config-items/car-config-items.component';
import { SummaryComponent } from './car-configuration/car-config-items/summary/summary.component';
import { SuperCarsModelsComponent } from './super-cars-models/super-cars-models.component';
import { InteriorComponent } from './car-configuration/car-config-items/interior/interior.component';
import { ExteriorComponent } from './car-configuration/car-config-items/exterior/exterior.component';
import { DriveComponent } from './car-configuration/car-config-items/drive/drive.component';
import { LinesAndPackagesComponent } from './car-configuration/car-config-items/lines-and-packages/lines-and-packages.component';
import { CarConfigurationComponent } from './car-configuration/car-configuration.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'models', component: SuperCarsModelsComponent },
  { path: 'configuration/:id', component: CarConfigurationComponent, children: [
    {path: 'car-config', component: CarConfigItemsComponent, children: [
      {path: 'lines-packages', component: LinesAndPackagesComponent},
      {path: 'antrieb', component: DriveComponent},
      {path: 'exterieur', component: ExteriorComponent},
      {path: 'interieur', component: InteriorComponent},
      {path: 'summary', component: SummaryComponent},
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
