/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { formationDelete } from '../fn/handicap/formation-delete';
import { FormationDelete$Params } from '../fn/handicap/formation-delete';
import { Handicap } from '../models/handicap';
import { handicapCreate } from '../fn/handicap/handicap-create';
import { HandicapCreate$Params } from '../fn/handicap/handicap-create';
import { handicapGetById } from '../fn/handicap/handicap-get-by-id';
import { HandicapGetById$Params } from '../fn/handicap/handicap-get-by-id';
import { handicapsGetAll } from '../fn/handicap/handicaps-get-all';
import { HandicapsGetAll$Params } from '../fn/handicap/handicaps-get-all';
import { handicapUpdate } from '../fn/handicap/handicap-update';
import { HandicapUpdate$Params } from '../fn/handicap/handicap-update';

@Injectable({ providedIn: 'root' })
export class HandicapService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `handicapUpdate()` */
  static readonly HandicapUpdatePath = '/api/handicaps/handicap-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handicapUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  handicapUpdate$Response(params: HandicapUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Handicap>> {
    return handicapUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handicapUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  handicapUpdate(params: HandicapUpdate$Params, context?: HttpContext): Observable<Handicap> {
    return this.handicapUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Handicap>): Handicap => r.body)
    );
  }

  /** Path part for operation `handicapsGetAll()` */
  static readonly HandicapsGetAllPath = '/api/handicaps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handicapsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  handicapsGetAll$Response(params?: HandicapsGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Handicap>>> {
    return handicapsGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handicapsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  handicapsGetAll(params?: HandicapsGetAll$Params, context?: HttpContext): Observable<Array<Handicap>> {
    return this.handicapsGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Handicap>>): Array<Handicap> => r.body)
    );
  }

  /** Path part for operation `handicapCreate()` */
  static readonly HandicapCreatePath = '/api/handicaps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handicapCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  handicapCreate$Response(params: HandicapCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Handicap>> {
    return handicapCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handicapCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  handicapCreate(params: HandicapCreate$Params, context?: HttpContext): Observable<Handicap> {
    return this.handicapCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Handicap>): Handicap => r.body)
    );
  }

  /** Path part for operation `handicapGetById()` */
  static readonly HandicapGetByIdPath = '/api/handicaps/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `handicapGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  handicapGetById$Response(params: HandicapGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Handicap>> {
    return handicapGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `handicapGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  handicapGetById(params: HandicapGetById$Params, context?: HttpContext): Observable<Handicap> {
    return this.handicapGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Handicap>): Handicap => r.body)
    );
  }

  /** Path part for operation `formationDelete()` */
  static readonly FormationDeletePath = '/api/handicaps/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationDelete$Response(params: FormationDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return formationDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationDelete(params: FormationDelete$Params, context?: HttpContext): Observable<void> {
    return this.formationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
