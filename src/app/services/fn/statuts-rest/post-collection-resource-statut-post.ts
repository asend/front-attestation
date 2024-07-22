/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStatut } from '../../models/entity-model-statut';
import { StatutRequestBody } from '../../models/statut-request-body';

export interface PostCollectionResourceStatutPost$Params {
      body: StatutRequestBody
}

export function postCollectionResourceStatutPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceStatutPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceStatutPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCollectionResourceStatutPost.PATH = '/statuts';
