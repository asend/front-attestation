/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SecteurDto } from '../../models/secteur-dto';

export interface SecteurGetById$Params {
  id: number;
}

export function secteurGetById(http: HttpClient, rootUrl: string, params: SecteurGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<SecteurDto>> {
  const rb = new RequestBuilder(rootUrl, secteurGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SecteurDto>;
    })
  );
}

secteurGetById.PATH = '/api/secteurs/{id}';
