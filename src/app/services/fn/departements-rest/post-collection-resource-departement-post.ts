/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DepartementRequestBody } from '../../models/departement-request-body';
import { EntityModelDepartement } from '../../models/entity-model-departement';

export interface PostCollectionResourceDepartementPost$Params {
      body: DepartementRequestBody
}

export function postCollectionResourceDepartementPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceDepartementPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceDepartementPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelDepartement>;
    })
  );
}

postCollectionResourceDepartementPost.PATH = '/departements';
