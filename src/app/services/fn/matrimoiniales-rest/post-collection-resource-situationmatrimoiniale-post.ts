/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSituationMatrimoiniale } from '../../models/entity-model-situation-matrimoiniale';
import { SituationMatrimoinialeRequestBody } from '../../models/situation-matrimoiniale-request-body';

export interface PostCollectionResourceSituationmatrimoinialePost$Params {
      body: SituationMatrimoinialeRequestBody
}

export function postCollectionResourceSituationmatrimoinialePost(http: HttpClient, rootUrl: string, params: PostCollectionResourceSituationmatrimoinialePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceSituationmatrimoinialePost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSituationMatrimoiniale>;
    })
  );
}

postCollectionResourceSituationmatrimoinialePost.PATH = '/matrimoiniales';
