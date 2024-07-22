/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface FollowPropertyReferenceDemandeurGet111$UriList$Params {
  id: string;
}

export function followPropertyReferenceDemandeurGet111$UriList(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceDemandeurGet111$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceDemandeurGet111$UriList.PATH, 'get');
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

followPropertyReferenceDemandeurGet111$UriList.PATH = '/demandeurs/{id}/sexe';
