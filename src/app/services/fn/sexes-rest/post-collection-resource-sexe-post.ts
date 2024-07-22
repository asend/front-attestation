/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSexe } from '../../models/entity-model-sexe';
import { SexeRequestBody } from '../../models/sexe-request-body';

export interface PostCollectionResourceSexePost$Params {
      body: SexeRequestBody
}

export function postCollectionResourceSexePost(http: HttpClient, rootUrl: string, params: PostCollectionResourceSexePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceSexePost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSexe>;
    })
  );
}

postCollectionResourceSexePost.PATH = '/sexes';
