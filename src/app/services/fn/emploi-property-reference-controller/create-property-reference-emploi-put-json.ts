/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { EntityModelSecteur } from '../../models/entity-model-secteur';

export interface CreatePropertyReferenceEmploiPut$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceEmploiPut$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceEmploiPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceEmploiPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSecteur>;
    })
  );
}

createPropertyReferenceEmploiPut$Json.PATH = '/emplois/{id}/secteur';
