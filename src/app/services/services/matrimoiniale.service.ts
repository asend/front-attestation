/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { SituationMatrimoiniale } from '../models/situation-matrimoiniale';
import { situationMatrimoinialeServiceCreate } from '../fn/matrimoiniale/situation-matrimoiniale-service-create';
import { SituationMatrimoinialeServiceCreate$Params } from '../fn/matrimoiniale/situation-matrimoiniale-service-create';
import { situationMatrimoinialeServiceDelete } from '../fn/matrimoiniale/situation-matrimoiniale-service-delete';
import { SituationMatrimoinialeServiceDelete$Params } from '../fn/matrimoiniale/situation-matrimoiniale-service-delete';
import { situationMatrimoinialeServiceGetById } from '../fn/matrimoiniale/situation-matrimoiniale-service-get-by-id';
import { SituationMatrimoinialeServiceGetById$Params } from '../fn/matrimoiniale/situation-matrimoiniale-service-get-by-id';
import { situationMatrimoinialeServicesGetAll } from '../fn/matrimoiniale/situation-matrimoiniale-services-get-all';
import { SituationMatrimoinialeServicesGetAll$Params } from '../fn/matrimoiniale/situation-matrimoiniale-services-get-all';
import { situationMatrimoinialeServiceUpdate } from '../fn/matrimoiniale/situation-matrimoiniale-service-update';
import { SituationMatrimoinialeServiceUpdate$Params } from '../fn/matrimoiniale/situation-matrimoiniale-service-update';

@Injectable({ providedIn: 'root' })
export class MatrimoinialeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `situationMatrimoinialeServiceUpdate()` */
  static readonly SituationMatrimoinialeServiceUpdatePath = '/api/matrimoiniales/situation-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `situationMatrimoinialeServiceUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  situationMatrimoinialeServiceUpdate$Response(params: SituationMatrimoinialeServiceUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<SituationMatrimoiniale>> {
    return situationMatrimoinialeServiceUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `situationMatrimoinialeServiceUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  situationMatrimoinialeServiceUpdate(params: SituationMatrimoinialeServiceUpdate$Params, context?: HttpContext): Observable<SituationMatrimoiniale> {
    return this.situationMatrimoinialeServiceUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<SituationMatrimoiniale>): SituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `situationMatrimoinialeServicesGetAll()` */
  static readonly SituationMatrimoinialeServicesGetAllPath = '/api/matrimoiniales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `situationMatrimoinialeServicesGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServicesGetAll$Response(params?: SituationMatrimoinialeServicesGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SituationMatrimoiniale>>> {
    return situationMatrimoinialeServicesGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `situationMatrimoinialeServicesGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServicesGetAll(params?: SituationMatrimoinialeServicesGetAll$Params, context?: HttpContext): Observable<Array<SituationMatrimoiniale>> {
    return this.situationMatrimoinialeServicesGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SituationMatrimoiniale>>): Array<SituationMatrimoiniale> => r.body)
    );
  }

  /** Path part for operation `situationMatrimoinialeServiceCreate()` */
  static readonly SituationMatrimoinialeServiceCreatePath = '/api/matrimoiniales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `situationMatrimoinialeServiceCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  situationMatrimoinialeServiceCreate$Response(params: SituationMatrimoinialeServiceCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<SituationMatrimoiniale>> {
    return situationMatrimoinialeServiceCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `situationMatrimoinialeServiceCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  situationMatrimoinialeServiceCreate(params: SituationMatrimoinialeServiceCreate$Params, context?: HttpContext): Observable<SituationMatrimoiniale> {
    return this.situationMatrimoinialeServiceCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<SituationMatrimoiniale>): SituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `situationMatrimoinialeServiceGetById()` */
  static readonly SituationMatrimoinialeServiceGetByIdPath = '/api/matrimoiniales/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `situationMatrimoinialeServiceGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServiceGetById$Response(params: SituationMatrimoinialeServiceGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<SituationMatrimoiniale>> {
    return situationMatrimoinialeServiceGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `situationMatrimoinialeServiceGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServiceGetById(params: SituationMatrimoinialeServiceGetById$Params, context?: HttpContext): Observable<SituationMatrimoiniale> {
    return this.situationMatrimoinialeServiceGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SituationMatrimoiniale>): SituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `situationMatrimoinialeServiceDelete()` */
  static readonly SituationMatrimoinialeServiceDeletePath = '/api/matrimoiniales/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `situationMatrimoinialeServiceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServiceDelete$Response(params: SituationMatrimoinialeServiceDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return situationMatrimoinialeServiceDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `situationMatrimoinialeServiceDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  situationMatrimoinialeServiceDelete(params: SituationMatrimoinialeServiceDelete$Params, context?: HttpContext): Observable<void> {
    return this.situationMatrimoinialeServiceDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
