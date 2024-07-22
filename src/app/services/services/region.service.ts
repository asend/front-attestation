/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Region } from '../models/region';
import { regionCreate } from '../fn/region/region-create';
import { RegionCreate$Params } from '../fn/region/region-create';
import { regionDelete } from '../fn/region/region-delete';
import { RegionDelete$Params } from '../fn/region/region-delete';
import { regionGetAll } from '../fn/region/region-get-all';
import { RegionGetAll$Params } from '../fn/region/region-get-all';
import { regionGetById } from '../fn/region/region-get-by-id';
import { RegionGetById$Params } from '../fn/region/region-get-by-id';
import { regionUpdate } from '../fn/region/region-update';
import { RegionUpdate$Params } from '../fn/region/region-update';

@Injectable({ providedIn: 'root' })
export class RegionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `regionUpdate()` */
  static readonly RegionUpdatePath = '/api/regions/region-update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regionUpdate$Response(params: RegionUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Region>> {
    return regionUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regionUpdate(params: RegionUpdate$Params, context?: HttpContext): Observable<Region> {
    return this.regionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Region>): Region => r.body)
    );
  }

  /** Path part for operation `regionGetAll()` */
  static readonly RegionGetAllPath = '/api/regions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGetAll$Response(params?: RegionGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Region>>> {
    return regionGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGetAll(params?: RegionGetAll$Params, context?: HttpContext): Observable<Array<Region>> {
    return this.regionGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Region>>): Array<Region> => r.body)
    );
  }

  /** Path part for operation `regionCreate()` */
  static readonly RegionCreatePath = '/api/regions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regionCreate$Response(params: RegionCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Region>> {
    return regionCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  regionCreate(params: RegionCreate$Params, context?: HttpContext): Observable<Region> {
    return this.regionCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Region>): Region => r.body)
    );
  }

  /** Path part for operation `regionGetById()` */
  static readonly RegionGetByIdPath = '/api/regions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGetById$Response(params: RegionGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Region>> {
    return regionGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionGetById(params: RegionGetById$Params, context?: HttpContext): Observable<Region> {
    return this.regionGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Region>): Region => r.body)
    );
  }

  /** Path part for operation `regionDelete()` */
  static readonly RegionDeletePath = '/api/regions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionDelete$Response(params: RegionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return regionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regionDelete(params: RegionDelete$Params, context?: HttpContext): Observable<void> {
    return this.regionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
