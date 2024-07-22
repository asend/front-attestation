/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeletePropertyReferenceIdProcesverbalDelete$Params {
  id: string;
  propertyId: string;
}

export function deletePropertyReferenceIdProcesverbalDelete(http: HttpClient, rootUrl: string, params: DeletePropertyReferenceIdProcesverbalDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deletePropertyReferenceIdProcesverbalDelete.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

deletePropertyReferenceIdProcesverbalDelete.PATH = '/procesVerbals/{id}/statut/{propertyId}';
