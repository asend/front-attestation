/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSecteur } from '../../models/entity-model-secteur';

export interface GetItemResourceSecteurGet$Params {
  id: string;
}

export function getItemResourceSecteurGet(http: HttpClient, rootUrl: string, params: GetItemResourceSecteurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceSecteurGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelSecteur>;
    })
  );
}

getItemResourceSecteurGet.PATH = '/secteurs/{id}';
