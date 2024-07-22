/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { emploiCreate } from '../fn/emploi/emploi-create';
import { EmploiCreate$Params } from '../fn/emploi/emploi-create';
import { emploiDelete } from '../fn/emploi/emploi-delete';
import { EmploiDelete$Params } from '../fn/emploi/emploi-delete';
import { EmploiDto } from '../models/emploi-dto';
import { emploiGetAll } from '../fn/emploi/emploi-get-all';
import { EmploiGetAll$Params } from '../fn/emploi/emploi-get-all';
import { emploiGetById } from '../fn/emploi/emploi-get-by-id';
import { EmploiGetById$Params } from '../fn/emploi/emploi-get-by-id';
import { emploiUpdate } from '../fn/emploi/emploi-update';
import { EmploiUpdate$Params } from '../fn/emploi/emploi-update';

@Injectable({ providedIn: 'root' })
export class EmploiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `emploiUpdate()` */
  static readonly EmploiUpdatePath = '/api/emplois/emploi-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emploiUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emploiUpdate$Response(params: EmploiUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<EmploiDto>> {
    return emploiUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emploiUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emploiUpdate(params: EmploiUpdate$Params, context?: HttpContext): Observable<EmploiDto> {
    return this.emploiUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmploiDto>): EmploiDto => r.body)
    );
  }

  /** Path part for operation `emploiGetAll()` */
  static readonly EmploiGetAllPath = '/api/emplois';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emploiGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiGetAll$Response(params?: EmploiGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmploiDto>>> {
    return emploiGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emploiGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiGetAll(params?: EmploiGetAll$Params, context?: HttpContext): Observable<Array<EmploiDto>> {
    return this.emploiGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EmploiDto>>): Array<EmploiDto> => r.body)
    );
  }

  /** Path part for operation `emploiCreate()` */
  static readonly EmploiCreatePath = '/api/emplois';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emploiCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emploiCreate$Response(params: EmploiCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<EmploiDto>> {
    return emploiCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emploiCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  emploiCreate(params: EmploiCreate$Params, context?: HttpContext): Observable<EmploiDto> {
    return this.emploiCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmploiDto>): EmploiDto => r.body)
    );
  }

  /** Path part for operation `emploiGetById()` */
  static readonly EmploiGetByIdPath = '/api/emplois/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emploiGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiGetById$Response(params: EmploiGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<EmploiDto>> {
    return emploiGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emploiGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiGetById(params: EmploiGetById$Params, context?: HttpContext): Observable<EmploiDto> {
    return this.emploiGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmploiDto>): EmploiDto => r.body)
    );
  }

  /** Path part for operation `emploiDelete()` */
  static readonly EmploiDeletePath = '/api/emplois/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `emploiDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiDelete$Response(params: EmploiDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return emploiDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `emploiDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  emploiDelete(params: EmploiDelete$Params, context?: HttpContext): Observable<void> {
    return this.emploiDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
