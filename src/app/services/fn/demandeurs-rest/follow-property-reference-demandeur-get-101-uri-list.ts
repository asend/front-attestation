/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface FollowPropertyReferenceDemandeurGet101$UriList$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet101$UriList(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet101$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet101$UriList.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/uri-list', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

followPropertyReferenceDemandeurGet101$UriList.PATH = '/demandeurs/{id}/secteurs';
