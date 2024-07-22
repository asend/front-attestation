/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelSecteur } from '../../models/entity-model-secteur';
import { SecteurRequestBody } from '../../models/secteur-request-body';

export interface PatchItemResourceSecteurPatch$Params {
  id: string;
      body: SecteurRequestBody
}

export function patchItemResourceSecteurPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceSecteurPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceSecteurPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceSecteurPatch.PATH = '/secteurs/{id}';
