/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { DemandeursRestService } from './services/demandeurs-rest.service';
import { DepartementsRestService } from './services/departements-rest.service';
import { EmploiEntityControllerService } from './services/emploi-entity-controller.service';
import { FormationsRestService } from './services/formations-rest.service';
import { HandicapsRestService } from './services/handicaps-rest.service';
import { ImagesRestService } from './services/images-rest.service';
import { MatrimoinialesRestService } from './services/matrimoiniales-rest.service';
import { ProcesVerbalEntityControllerService } from './services/proces-verbal-entity-controller.service';
import { ProcesVerbalPropertyReferenceControllerService } from './services/proces-verbal-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { RegionsRestService } from './services/regions-rest.service';
import { SecteurEntityControllerService } from './services/secteur-entity-controller.service';
import { SecteurPropertyReferenceControllerService } from './services/secteur-property-reference-controller.service';
import { SexesRestService } from './services/sexes-rest.service';
import { StatutsRestService } from './services/statuts-rest.service';
import { StatutService } from './services/statut.service';
import { SexeService } from './services/sexe.service';
import { SecteurService } from './services/secteur.service';
import { RegionService } from './services/region.service';
import { ProcesverbalService } from './services/procesverbal.service';
import { MatrimoinialeService } from './services/matrimoiniale.service';
import { HandicapService } from './services/handicap.service';
import { FormationService } from './services/formation.service';
import { EmploiService } from './services/emploi.service';
import { DepartementService } from './services/departement.service';
import { DemandeurService } from './services/demandeur.service';
import { ImageService } from './services/image.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DemandeursRestService,
    DepartementsRestService,
    EmploiEntityControllerService,
    FormationsRestService,
    HandicapsRestService,
    ImagesRestService,
    MatrimoinialesRestService,
    ProcesVerbalEntityControllerService,
    ProcesVerbalPropertyReferenceControllerService,
    ProfileControllerService,
    RegionsRestService,
    SecteurEntityControllerService,
    SecteurPropertyReferenceControllerService,
    SexesRestService,
    StatutsRestService,
    StatutService,
    SexeService,
    SecteurService,
    RegionService,
    ProcesverbalService,
    MatrimoinialeService,
    HandicapService,
    FormationService,
    EmploiService,
    DepartementService,
    DemandeurService,
    ImageService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
