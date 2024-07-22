/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelRegion } from '../../models/entity-model-region';
import { RegionRequestBody } from '../../models/region-request-body';

export interface PostCollectionResourceRegionPost$Params {
      body: RegionRequestBody
}

export function postCollectionResourceRegionPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceRegionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceRegionPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelRegion>;
    })
  );
}

postCollectionResourceRegionPost.PATH = '/regions';
