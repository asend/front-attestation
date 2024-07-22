/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Secteur } from '../models/secteur';
import { secteurCreate } from '../fn/secteur/secteur-create';
import { SecteurCreate$Params } from '../fn/secteur/secteur-create';
import { secteurDelete } from '../fn/secteur/secteur-delete';
import { SecteurDelete$Params } from '../fn/secteur/secteur-delete';
import { SecteurDto } from '../models/secteur-dto';
import { secteurGetById } from '../fn/secteur/secteur-get-by-id';
import { SecteurGetById$Params } from '../fn/secteur/secteur-get-by-id';
import { secteursGetAll } from '../fn/secteur/secteurs-get-all';
import { SecteursGetAll$Params } from '../fn/secteur/secteurs-get-all';
import { secteurUpdate } from '../fn/secteur/secteur-update';
import { SecteurUpdate$Params } from '../fn/secteur/secteur-update';

@Injectable({ providedIn: 'root' })
export class SecteurService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `secteurUpdate()` */
  static readonly SecteurUpdatePath = '/api/secteurs/secteur-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `secteurUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  secteurUpdate$Response(params: SecteurUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Secteur>> {
    return secteurUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `secteurUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  secteurUpdate(params: SecteurUpdate$Params, context?: HttpContext): Observable<Secteur> {
    return this.secteurUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Secteur>): Secteur => r.body)
    );
  }

  /** Path part for operation `secteursGetAll()` */
  static readonly SecteursGetAllPath = '/api/secteurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `secteursGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteursGetAll$Response(params?: SecteursGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecteurDto>>> {
    return secteursGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `secteursGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteursGetAll(params?: SecteursGetAll$Params, context?: HttpContext): Observable<Array<SecteurDto>> {
    return this.secteursGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SecteurDto>>): Array<SecteurDto> => r.body)
    );
  }

  /** Path part for operation `secteurCreate()` */
  static readonly SecteurCreatePath = '/api/secteurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `secteurCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  secteurCreate$Response(params: SecteurCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Secteur>> {
    return secteurCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `secteurCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  secteurCreate(params: SecteurCreate$Params, context?: HttpContext): Observable<Secteur> {
    return this.secteurCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Secteur>): Secteur => r.body)
    );
  }

  /** Path part for operation `secteurGetById()` */
  static readonly SecteurGetByIdPath = '/api/secteurs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `secteurGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteurGetById$Response(params: SecteurGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<SecteurDto>> {
    return secteurGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `secteurGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteurGetById(params: SecteurGetById$Params, context?: HttpContext): Observable<SecteurDto> {
    return this.secteurGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SecteurDto>): SecteurDto => r.body)
    );
  }

  /** Path part for operation `secteurDelete()` */
  static readonly SecteurDeletePath = '/api/secteurs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `secteurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteurDelete$Response(params: SecteurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return secteurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `secteurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  secteurDelete(params: SecteurDelete$Params, context?: HttpContext): Observable<void> {
    return this.secteurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
