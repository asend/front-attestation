/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Departement } from '../models/departement';
import { departementCreate } from '../fn/departement/departement-create';
import { DepartementCreate$Params } from '../fn/departement/departement-create';
import { departementDelete } from '../fn/departement/departement-delete';
import { DepartementDelete$Params } from '../fn/departement/departement-delete';
import { departementGetAll } from '../fn/departement/departement-get-all';
import { DepartementGetAll$Params } from '../fn/departement/departement-get-all';
import { departementGetById } from '../fn/departement/departement-get-by-id';
import { DepartementGetById$Params } from '../fn/departement/departement-get-by-id';
import { departementUpdate } from '../fn/departement/departement-update';
import { DepartementUpdate$Params } from '../fn/departement/departement-update';

@Injectable({ providedIn: 'root' })
export class DepartementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `departementUpdate()` */
  static readonly DepartementUpdatePath = '/api/departements/departement-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `departementUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  departementUpdate$Response(params: DepartementUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Departement>> {
    return departementUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `departementUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  departementUpdate(params: DepartementUpdate$Params, context?: HttpContext): Observable<Departement> {
    return this.departementUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Departement>): Departement => r.body)
    );
  }

  /** Path part for operation `departementGetAll()` */
  static readonly DepartementGetAllPath = '/api/departements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `departementGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementGetAll$Response(params?: DepartementGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Departement>>> {
    return departementGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `departementGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementGetAll(params?: DepartementGetAll$Params, context?: HttpContext): Observable<Array<Departement>> {
    return this.departementGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Departement>>): Array<Departement> => r.body)
    );
  }

  /** Path part for operation `departementCreate()` */
  static readonly DepartementCreatePath = '/api/departements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `departementCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  departementCreate$Response(params: DepartementCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Departement>> {
    return departementCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `departementCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  departementCreate(params: DepartementCreate$Params, context?: HttpContext): Observable<Departement> {
    return this.departementCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Departement>): Departement => r.body)
    );
  }

  /** Path part for operation `departementGetById()` */
  static readonly DepartementGetByIdPath = '/api/departements/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `departementGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementGetById$Response(params: DepartementGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Departement>> {
    return departementGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `departementGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementGetById(params: DepartementGetById$Params, context?: HttpContext): Observable<Departement> {
    return this.departementGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Departement>): Departement => r.body)
    );
  }

  /** Path part for operation `departementDelete()` */
  static readonly DepartementDeletePath = '/api/departements/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `departementDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementDelete$Response(params: DepartementDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return departementDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `departementDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  departementDelete(params: DepartementDelete$Params, context?: HttpContext): Observable<void> {
    return this.departementDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
