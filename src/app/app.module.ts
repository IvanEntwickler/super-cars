import { CarModelService } from './car-model.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { ModelSliderComponent } from './car-configuration/model-slider/model-slider.component';
import { FilteredCarCardComponent } from './super-cars-models/view-cars-models/filtered-car-card/filtered-car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
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
    ModelSliderComponent,
    FilteredCarCardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    // remove when real Server is available
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
