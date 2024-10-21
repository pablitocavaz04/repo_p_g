import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './share/share.module';
import { provideHttpClient } from '@angular/common/http';
import { PeopleMappingJsonServer } from './core/repositories/impl/people-mapping-json-server.service';
import { PeopleRepositoryFactory } from './core/repositories/repository.factory';
import { PEOPLE_RESOURCE_NAME_TOKEN, PEOPLE_API_URL_TOKEN, PEOPLE_REPOSITORY_MAPPING_TOKEN } from './core/repositories/repository.tokens';
import { PeopleService } from './core/services/impl/people.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,SharedModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    
    { provide: PEOPLE_RESOURCE_NAME_TOKEN, useValue: 'personas' },
    { provide: PEOPLE_API_URL_TOKEN, useValue: 'http://localhost:3000' },
    // Registrar los repositorios
    { 
      provide: PEOPLE_REPOSITORY_MAPPING_TOKEN, 
      useClass: PeopleMappingJsonServer
    },
    PeopleRepositoryFactory,
    // Registrar otros repositorios según sea necesario
    // Servicios de aplicación
    {
      provide: 'PeopleService',
      useClass: PeopleService
    }
  ],
  // ... otros proveedores],
  bootstrap: [AppComponent],
})
export class AppModule {}
