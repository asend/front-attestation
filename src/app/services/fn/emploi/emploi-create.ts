/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmploiDto } from '../../models/emploi-dto';

export interface EmploiCreate$Params {
      body: EmploiDto
}

export function emploiCreate(http: HttpClient, rootUrl: string, params: EmploiCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<EmploiDto>> {
  const rb = new RequestBuilder(rootUrl, emploiCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EmploiDto>;
    })
  );
}

emploiCreate.PATH = '/api/emplois';
