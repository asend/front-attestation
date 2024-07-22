/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Formation } from '../models/formation';
import { formationCreate } from '../fn/formation/formation-create';
import { FormationCreate$Params } from '../fn/formation/formation-create';
import { formationDelete1 } from '../fn/formation/formation-delete-1';
import { FormationDelete1$Params } from '../fn/formation/formation-delete-1';
import { formationGetAll } from '../fn/formation/formation-get-all';
import { FormationGetAll$Params } from '../fn/formation/formation-get-all';
import { formationGetById } from '../fn/formation/formation-get-by-id';
import { FormationGetById$Params } from '../fn/formation/formation-get-by-id';
import { formationUpdate } from '../fn/formation/formation-update';
import { FormationUpdate$Params } from '../fn/formation/formation-update';

@Injectable({ providedIn: 'root' })
export class FormationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `formationUpdate()` */
  static readonly FormationUpdatePath = '/api/formations/formation-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  formationUpdate$Response(params: FormationUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Formation>> {
    return formationUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  formationUpdate(params: FormationUpdate$Params, context?: HttpContext): Observable<Formation> {
    return this.formationUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Formation>): Formation => r.body)
    );
  }

  /** Path part for operation `formationGetAll()` */
  static readonly FormationGetAllPath = '/api/formations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationGetAll$Response(params?: FormationGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Formation>>> {
    return formationGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationGetAll(params?: FormationGetAll$Params, context?: HttpContext): Observable<Array<Formation>> {
    return this.formationGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Formation>>): Array<Formation> => r.body)
    );
  }

  /** Path part for operation `formationCreate()` */
  static readonly FormationCreatePath = '/api/formations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  formationCreate$Response(params: FormationCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Formation>> {
    return formationCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  formationCreate(params: FormationCreate$Params, context?: HttpContext): Observable<Formation> {
    return this.formationCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Formation>): Formation => r.body)
    );
  }

  /** Path part for operation `formationGetById()` */
  static readonly FormationGetByIdPath = '/api/formations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationGetById$Response(params: FormationGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Formation>> {
    return formationGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationGetById(params: FormationGetById$Params, context?: HttpContext): Observable<Formation> {
    return this.formationGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Formation>): Formation => r.body)
    );
  }

  /** Path part for operation `formationDelete1()` */
  static readonly FormationDelete1Path = '/api/formations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `formationDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationDelete1$Response(params: FormationDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return formationDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `formationDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  formationDelete1(params: FormationDelete1$Params, context?: HttpContext): Observable<void> {
    return this.formationDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
