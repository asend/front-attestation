/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Statut } from '../models/statut';
import { statutCreate } from '../fn/statut/statut-create';
import { StatutCreate$Params } from '../fn/statut/statut-create';
import { statutDelete } from '../fn/statut/statut-delete';
import { StatutDelete$Params } from '../fn/statut/statut-delete';
import { statutGetById } from '../fn/statut/statut-get-by-id';
import { StatutGetById$Params } from '../fn/statut/statut-get-by-id';
import { statutsGetAll } from '../fn/statut/statuts-get-all';
import { StatutsGetAll$Params } from '../fn/statut/statuts-get-all';
import { statutUpdate } from '../fn/statut/statut-update';
import { StatutUpdate$Params } from '../fn/statut/statut-update';

@Injectable({ providedIn: 'root' })
export class StatutService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `statutUpdate()` */
  static readonly StatutUpdatePath = '/api/statuts/Statut-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statutUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  statutUpdate$Response(params: StatutUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Statut>> {
    return statutUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statutUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  statutUpdate(params: StatutUpdate$Params, context?: HttpContext): Observable<Statut> {
    return this.statutUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Statut>): Statut => r.body)
    );
  }

  /** Path part for operation `statutsGetAll()` */
  static readonly StatutsGetAllPath = '/api/statuts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statutsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutsGetAll$Response(params?: StatutsGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Statut>>> {
    return statutsGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statutsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutsGetAll(params?: StatutsGetAll$Params, context?: HttpContext): Observable<Array<Statut>> {
    return this.statutsGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Statut>>): Array<Statut> => r.body)
    );
  }

  /** Path part for operation `statutCreate()` */
  static readonly StatutCreatePath = '/api/statuts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statutCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  statutCreate$Response(params: StatutCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Statut>> {
    return statutCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statutCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  statutCreate(params: StatutCreate$Params, context?: HttpContext): Observable<Statut> {
    return this.statutCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Statut>): Statut => r.body)
    );
  }

  /** Path part for operation `statutGetById()` */
  static readonly StatutGetByIdPath = '/api/statuts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statutGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutGetById$Response(params: StatutGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Statut>> {
    return statutGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statutGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutGetById(params: StatutGetById$Params, context?: HttpContext): Observable<Statut> {
    return this.statutGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Statut>): Statut => r.body)
    );
  }

  /** Path part for operation `statutDelete()` */
  static readonly StatutDeletePath = '/api/statuts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statutDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutDelete$Response(params: StatutDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return statutDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `statutDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statutDelete(params: StatutDelete$Params, context?: HttpContext): Observable<void> {
    return this.statutDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
