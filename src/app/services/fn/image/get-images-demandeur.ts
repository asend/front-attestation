/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';

export interface GetImagesDemandeur$Params {
  id: number;
}

export function getImagesDemandeur(http: HttpClient, rootUrl: string, params: GetImagesDemandeur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Image>>> {
  const rb = new RequestBuilder(rootUrl, getImagesDemandeur.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Image>>;
    })
  );
}

getImagesDemandeur.PATH = '/api/images/imagesDemandeur/{id}';
