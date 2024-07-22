/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelImage } from '../../models/entity-model-image';
import { ImageRequestBody } from '../../models/image-request-body';

export interface PatchItemResourceImagePatch$Params {
  id: string;
      body: ImageRequestBody
}

export function patchItemResourceImagePatch(http: HttpClient, rootUrl: string, params: PatchItemResourceImagePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceImagePatch.PATH, 'patch');
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

patchItemResourceImagePatch.PATH = '/images/{id}';
