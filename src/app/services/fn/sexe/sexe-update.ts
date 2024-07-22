/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Sexe } from '../../models/sexe';

export interface SexeUpdate$Params {
      body: Sexe
}

export function sexeUpdate(http: HttpClient, rootUrl: string, params: SexeUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Sexe>> {
  const rb = new RequestBuilder(rootUrl, sexeUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Sexe>;
    })
  );
}

sexeUpdate.PATH = '/api/sexes/sexe-update';
