/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Sexe } from '../models/sexe';
import { sexeCreate } from '../fn/sexe/sexe-create';
import { SexeCreate$Params } from '../fn/sexe/sexe-create';
import { sexeDelete } from '../fn/sexe/sexe-delete';
import { SexeDelete$Params } from '../fn/sexe/sexe-delete';
import { sexeGetById } from '../fn/sexe/sexe-get-by-id';
import { SexeGetById$Params } from '../fn/sexe/sexe-get-by-id';
import { sexesGetAll } from '../fn/sexe/sexes-get-all';
import { SexesGetAll$Params } from '../fn/sexe/sexes-get-all';
import { sexeUpdate } from '../fn/sexe/sexe-update';
import { SexeUpdate$Params } from '../fn/sexe/sexe-update';

@Injectable({ providedIn: 'root' })
export class SexeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sexeUpdate()` */
  static readonly SexeUpdatePath = '/api/sexes/sexe-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sexeUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sexeUpdate$Response(params: SexeUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Sexe>> {
    return sexeUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sexeUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sexeUpdate(params: SexeUpdate$Params, context?: HttpContext): Observable<Sexe> {
    return this.sexeUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Sexe>): Sexe => r.body)
    );
  }

  /** Path part for operation `sexesGetAll()` */
  static readonly SexesGetAllPath = '/api/sexes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sexesGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexesGetAll$Response(params?: SexesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Sexe>>> {
    return sexesGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sexesGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexesGetAll(params?: SexesGetAll$Params, context?: HttpContext): Observable<Array<Sexe>> {
    return this.sexesGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Sexe>>): Array<Sexe> => r.body)
    );
  }

  /** Path part for operation `sexeCreate()` */
  static readonly SexeCreatePath = '/api/sexes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sexeCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sexeCreate$Response(params: SexeCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Sexe>> {
    return sexeCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sexeCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sexeCreate(params: SexeCreate$Params, context?: HttpContext): Observable<Sexe> {
    return this.sexeCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Sexe>): Sexe => r.body)
    );
  }

  /** Path part for operation `sexeGetById()` */
  static readonly SexeGetByIdPath = '/api/sexes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sexeGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexeGetById$Response(params: SexeGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Sexe>> {
    return sexeGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sexeGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexeGetById(params: SexeGetById$Params, context?: HttpContext): Observable<Sexe> {
    return this.sexeGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Sexe>): Sexe => r.body)
    );
  }

  /** Path part for operation `sexeDelete()` */
  static readonly SexeDeletePath = '/api/sexes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sexeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexeDelete$Response(params: SexeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sexeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sexeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sexeDelete(params: SexeDelete$Params, context?: HttpContext): Observable<void> {
    return this.sexeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
