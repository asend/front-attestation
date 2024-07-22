/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ProcesVerbal } from '../models/proces-verbal';
import { procesVerbalCreate } from '../fn/procesverbal/proces-verbal-create';
import { ProcesVerbalCreate$Params } from '../fn/procesverbal/proces-verbal-create';
import { procesVerbalDelete } from '../fn/procesverbal/proces-verbal-delete';
import { ProcesVerbalDelete$Params } from '../fn/procesverbal/proces-verbal-delete';
import { procesVerbalGetAll } from '../fn/procesverbal/proces-verbal-get-all';
import { ProcesVerbalGetAll$Params } from '../fn/procesverbal/proces-verbal-get-all';
import { procesVerbalGetById } from '../fn/procesverbal/proces-verbal-get-by-id';
import { ProcesVerbalGetById$Params } from '../fn/procesverbal/proces-verbal-get-by-id';
import { procesVerbalUpdate } from '../fn/procesverbal/proces-verbal-update';
import { ProcesVerbalUpdate$Params } from '../fn/procesverbal/proces-verbal-update';

@Injectable({ providedIn: 'root' })
export class ProcesverbalService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `procesVerbalUpdate()` */
  static readonly ProcesVerbalUpdatePath = '/api/procesverbals/proces-verbal-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `procesVerbalUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  procesVerbalUpdate$Response(params: ProcesVerbalUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProcesVerbal>> {
    return procesVerbalUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `procesVerbalUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  procesVerbalUpdate(params: ProcesVerbalUpdate$Params, context?: HttpContext): Observable<ProcesVerbal> {
    return this.procesVerbalUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProcesVerbal>): ProcesVerbal => r.body)
    );
  }

  /** Path part for operation `procesVerbalGetAll()` */
  static readonly ProcesVerbalGetAllPath = '/api/procesverbals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `procesVerbalGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalGetAll$Response(params?: ProcesVerbalGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProcesVerbal>>> {
    return procesVerbalGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `procesVerbalGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalGetAll(params?: ProcesVerbalGetAll$Params, context?: HttpContext): Observable<Array<ProcesVerbal>> {
    return this.procesVerbalGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProcesVerbal>>): Array<ProcesVerbal> => r.body)
    );
  }

  /** Path part for operation `procesVerbalCreate()` */
  static readonly ProcesVerbalCreatePath = '/api/procesverbals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `procesVerbalCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  procesVerbalCreate$Response(params: ProcesVerbalCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ProcesVerbal>> {
    return procesVerbalCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `procesVerbalCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  procesVerbalCreate(params: ProcesVerbalCreate$Params, context?: HttpContext): Observable<ProcesVerbal> {
    return this.procesVerbalCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProcesVerbal>): ProcesVerbal => r.body)
    );
  }

  /** Path part for operation `procesVerbalGetById()` */
  static readonly ProcesVerbalGetByIdPath = '/api/procesverbals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `procesVerbalGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalGetById$Response(params: ProcesVerbalGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProcesVerbal>> {
    return procesVerbalGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `procesVerbalGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalGetById(params: ProcesVerbalGetById$Params, context?: HttpContext): Observable<ProcesVerbal> {
    return this.procesVerbalGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProcesVerbal>): ProcesVerbal => r.body)
    );
  }

  /** Path part for operation `procesVerbalDelete()` */
  static readonly ProcesVerbalDeletePath = '/api/procesverbals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `procesVerbalDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalDelete$Response(params: ProcesVerbalDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return procesVerbalDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `procesVerbalDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  procesVerbalDelete(params: ProcesVerbalDelete$Params, context?: HttpContext): Observable<void> {
    return this.procesVerbalDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
