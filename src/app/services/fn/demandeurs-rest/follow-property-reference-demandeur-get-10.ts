/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelSecteur } from '../../models/collection-model-secteur';

export interface FollowPropertyReferenceDemandeurGet10$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceDemandeurGet10(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet10$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet10.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelSecteur>;
    })
  );
}

followPropertyReferenceDemandeurGet10.PATH = '/demandeurs/{id}/secteurs/{propertyId}';
