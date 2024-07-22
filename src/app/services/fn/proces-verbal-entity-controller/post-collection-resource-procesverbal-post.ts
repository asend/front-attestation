/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelProcesVerbal } from '../../models/entity-model-proces-verbal';
import { ProcesVerbalRequestBody } from '../../models/proces-verbal-request-body';

export interface PostCollectionResourceProcesverbalPost$Params {
      body: ProcesVerbalRequestBody
}

export function postCollectionResourceProcesverbalPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceProcesverbalPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceProcesverbalPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelProcesVerbal>;
    })
  );
}

postCollectionResourceProcesverbalPost.PATH = '/procesVerbals';
