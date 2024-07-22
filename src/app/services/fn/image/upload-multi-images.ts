/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';

export interface UploadMultiImages$Params {
  id: number;
      body?: {
'image': Blob;
}
}

export function uploadMultiImages(http: HttpClient, rootUrl: string, params: UploadMultiImages$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
  const rb = new RequestBuilder(rootUrl, uploadMultiImages.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Image>;
    })
  );
}

uploadMultiImages.PATH = '/api/images/image/{id}';
