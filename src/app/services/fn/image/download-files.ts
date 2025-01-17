/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DownloadFiles$Params {
  filename: string;
}

export function downloadFiles(http: HttpClient, rootUrl: string, params: DownloadFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, downloadFiles.PATH, 'get');
  if (params) {
    rb.path('filename', params.filename, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

downloadFiles.PATH = '/api/images/download/{filename}';
