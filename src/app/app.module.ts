import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuperCarsModelsComponent } from './super-cars-models/super-cars-models.component';
import { ViewCarsModelsComponent } from './super-cars-models/view-cars-models/view-cars-models.component';
import { CarCardComponent } from './super-cars-models/view-cars-models/car-card/car-card.component';
import { FilterCarsComponent } from './super-cars-models/view-cars-models/filter-cars/filter-cars.component';
import { CarConfigurationComponent } from './car-configuration/car-configuration.component';
import { CarConfigItemsComponent } from './car-configuration/car-config-items/car-config-items.component';
import { LinesAndPackagesComponent } from './car-configuration/car-config-items/lines-and-packages/lines-and-packages.component';
import { DriveComponent } from './car-configuration/car-config-items/drive/drive.component';
import { ExteriorComponent } from './car-configuration/car-config-items/exterior/exterior.component';
import { InteriorComponent } from './car-configuration/car-config-items/interior/interior.component';
import { SummaryViewComponent } from './car-configuration/summary-view/summary-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperCarsModelsComponent,
    ViewCarsModelsComponent,
    CarCardComponent,
    FilterCarsComponent,
    CarConfigurationComponent,
    CarConfigItemsComponent,
    LinesAndPackagesComponent,
    DriveComponent,
    ExteriorComponent,
    InteriorComponent,
    SummaryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
