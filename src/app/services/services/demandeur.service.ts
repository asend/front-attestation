/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { demadeurUpdate } from '../fn/demandeur/demadeur-update';
import { DemadeurUpdate$Params } from '../fn/demandeur/demadeur-update';
import { Demandeur } from '../models/demandeur';
import { demandeurCreate } from '../fn/demandeur/demandeur-create';
import { DemandeurCreate$Params } from '../fn/demandeur/demandeur-create';
import { demandeurDelete } from '../fn/demandeur/demandeur-delete';
import { DemandeurDelete$Params } from '../fn/demandeur/demandeur-delete';
import { DemandeurDto } from '../models/demandeur-dto';
import { demandeurGetAll } from '../fn/demandeur/demandeur-get-all';
import { DemandeurGetAll$Params } from '../fn/demandeur/demandeur-get-all';
import { demandeurGetById } from '../fn/demandeur/demandeur-get-by-id';
import { DemandeurGetById$Params } from '../fn/demandeur/demandeur-get-by-id';
import { findByUser } from '../fn/demandeur/find-by-user';
import { FindByUser$Params } from '../fn/demandeur/find-by-user';
import { findByUsername } from '../fn/demandeur/find-by-username';
import { FindByUsername$Params } from '../fn/demandeur/find-by-username';
import { getAll } from '../fn/demandeur/get-all';
import { GetAll$Params } from '../fn/demandeur/get-all';
import { PageDemandeurDto } from '../models/page-demandeur-dto';

@Injectable({ providedIn: 'root' })
export class DemandeurService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `demadeurUpdate()` */
  static readonly DemadeurUpdatePath = '/api/demandeurs/demandeur-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demadeurUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demadeurUpdate$Response(params: DemadeurUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return demadeurUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demadeurUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demadeurUpdate(params: DemadeurUpdate$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.demadeurUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

  /** Path part for operation `demandeurGetAll()` */
  static readonly DemandeurGetAllPath = '/api/demandeurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demandeurGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurGetAll$Response(params?: DemandeurGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Demandeur>>> {
    return demandeurGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demandeurGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurGetAll(params?: DemandeurGetAll$Params, context?: HttpContext): Observable<Array<Demandeur>> {
    return this.demandeurGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Demandeur>>): Array<Demandeur> => r.body)
    );
  }

  /** Path part for operation `demandeurCreate()` */
  static readonly DemandeurCreatePath = '/api/demandeurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demandeurCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demandeurCreate$Response(params: DemandeurCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return demandeurCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demandeurCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demandeurCreate(params: DemandeurCreate$Params, context?: HttpContext): Observable<number> {
    return this.demandeurCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `demandeurGetById()` */
  static readonly DemandeurGetByIdPath = '/api/demandeurs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demandeurGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurGetById$Response(params: DemandeurGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return demandeurGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demandeurGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurGetById(params: DemandeurGetById$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.demandeurGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

  /** Path part for operation `demandeurDelete()` */
  static readonly DemandeurDeletePath = '/api/demandeurs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demandeurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurDelete$Response(params: DemandeurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return demandeurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demandeurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeurDelete(params: DemandeurDelete$Params, context?: HttpContext): Observable<void> {
    return this.demandeurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findByUsername()` */
  static readonly FindByUsernamePath = '/api/demandeurs/demandeur-by-username/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUsername$Response(params: FindByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return findByUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUsername(params: FindByUsername$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.findByUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

  /** Path part for operation `findByUser()` */
  static readonly FindByUserPath = '/api/demandeurs/by-user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUser$Response(params: FindByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Demandeur>> {
    return findByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUser(params: FindByUser$Params, context?: HttpContext): Observable<Demandeur> {
    return this.findByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Demandeur>): Demandeur => r.body)
    );
  }

  /** Path part for operation `getAll()` */
  static readonly GetAllPath = '/api/demandeurs/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PageDemandeurDto>> {
    return getAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params: GetAll$Params, context?: HttpContext): Observable<PageDemandeurDto> {
    return this.getAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageDemandeurDto>): PageDemandeurDto => r.body)
    );
  }

}
