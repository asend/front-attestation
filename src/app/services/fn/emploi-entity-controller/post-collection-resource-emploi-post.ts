/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmploiRequestBody } from '../../models/emploi-request-body';
import { EntityModelEmploi } from '../../models/entity-model-emploi';

export interface PostCollectionResourceEmploiPost$Params {
      body: EmploiRequestBody
}

export function postCollectionResourceEmploiPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceEmploiPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceEmploiPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelEmploi>;
    })
  );
}

postCollectionResourceEmploiPost.PATH = '/emplois';
