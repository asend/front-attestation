/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStatut } from '../../models/entity-model-statut';

export interface FollowPropertyReferenceProcesverbalGet1$Json$Params {
  id: string;
}

export function followPropertyReferenceProcesverbalGet1$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceProcesverbalGet1$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelStatut>;
    })
  );
}

followPropertyReferenceProcesverbalGet1$Json.PATH = '/procesVerbals/{id}/statut';
