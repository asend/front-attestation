/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelImage } from '../../models/entity-model-image';
import { ImageRequestBody } from '../../models/image-request-body';

export interface PutItemResourceImagePut$Params {
  id: string;
      body: ImageRequestBody
}

export function putItemResourceImagePut(http: HttpClient, rootUrl: string, params: PutItemResourceImagePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceImagePut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelImage>;
    })
  );
}

putItemResourceImagePut.PATH = '/images/{id}';
