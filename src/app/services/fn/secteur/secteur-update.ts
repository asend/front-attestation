/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Secteur } from '../../models/secteur';

export interface SecteurUpdate$Params {
      body: Secteur
}

export function secteurUpdate(http: HttpClient, rootUrl: string, params: SecteurUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Secteur>> {
  const rb = new RequestBuilder(rootUrl, secteurUpdate.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Secteur>;
    })
  );
}

secteurUpdate.PATH = '/api/secteurs/secteur-update';
