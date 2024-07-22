/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { descriptor111$Any } from '../fn/profile-controller/descriptor-111-any';
import { Descriptor111$Any$Params } from '../fn/profile-controller/descriptor-111-any';
import { descriptor111$Json } from '../fn/profile-controller/descriptor-111-json';
import { Descriptor111$Json$Params } from '../fn/profile-controller/descriptor-111-json';
import { descriptor1110$Any } from '../fn/profile-controller/descriptor-1110-any';
import { Descriptor1110$Any$Params } from '../fn/profile-controller/descriptor-1110-any';
import { descriptor1110$Json } from '../fn/profile-controller/descriptor-1110-json';
import { Descriptor1110$Json$Params } from '../fn/profile-controller/descriptor-1110-json';
import { descriptor1111$Any } from '../fn/profile-controller/descriptor-1111-any';
import { Descriptor1111$Any$Params } from '../fn/profile-controller/descriptor-1111-any';
import { descriptor1111$Json } from '../fn/profile-controller/descriptor-1111-json';
import { Descriptor1111$Json$Params } from '../fn/profile-controller/descriptor-1111-json';
import { descriptor1112$Any } from '../fn/profile-controller/descriptor-1112-any';
import { Descriptor1112$Any$Params } from '../fn/profile-controller/descriptor-1112-any';
import { descriptor1112$Json } from '../fn/profile-controller/descriptor-1112-json';
import { Descriptor1112$Json$Params } from '../fn/profile-controller/descriptor-1112-json';
import { descriptor112$Any } from '../fn/profile-controller/descriptor-112-any';
import { Descriptor112$Any$Params } from '../fn/profile-controller/descriptor-112-any';
import { descriptor112$Json } from '../fn/profile-controller/descriptor-112-json';
import { Descriptor112$Json$Params } from '../fn/profile-controller/descriptor-112-json';
import { descriptor113$Any } from '../fn/profile-controller/descriptor-113-any';
import { Descriptor113$Any$Params } from '../fn/profile-controller/descriptor-113-any';
import { descriptor113$Json } from '../fn/profile-controller/descriptor-113-json';
import { Descriptor113$Json$Params } from '../fn/profile-controller/descriptor-113-json';
import { descriptor114$Any } from '../fn/profile-controller/descriptor-114-any';
import { Descriptor114$Any$Params } from '../fn/profile-controller/descriptor-114-any';
import { descriptor114$Json } from '../fn/profile-controller/descriptor-114-json';
import { Descriptor114$Json$Params } from '../fn/profile-controller/descriptor-114-json';
import { descriptor115$Any } from '../fn/profile-controller/descriptor-115-any';
import { Descriptor115$Any$Params } from '../fn/profile-controller/descriptor-115-any';
import { descriptor115$Json } from '../fn/profile-controller/descriptor-115-json';
import { Descriptor115$Json$Params } from '../fn/profile-controller/descriptor-115-json';
import { descriptor116$Any } from '../fn/profile-controller/descriptor-116-any';
import { Descriptor116$Any$Params } from '../fn/profile-controller/descriptor-116-any';
import { descriptor116$Json } from '../fn/profile-controller/descriptor-116-json';
import { Descriptor116$Json$Params } from '../fn/profile-controller/descriptor-116-json';
import { descriptor117$Any } from '../fn/profile-controller/descriptor-117-any';
import { Descriptor117$Any$Params } from '../fn/profile-controller/descriptor-117-any';
import { descriptor117$Json } from '../fn/profile-controller/descriptor-117-json';
import { Descriptor117$Json$Params } from '../fn/profile-controller/descriptor-117-json';
import { descriptor118$Any } from '../fn/profile-controller/descriptor-118-any';
import { Descriptor118$Any$Params } from '../fn/profile-controller/descriptor-118-any';
import { descriptor118$Json } from '../fn/profile-controller/descriptor-118-json';
import { Descriptor118$Json$Params } from '../fn/profile-controller/descriptor-118-json';
import { descriptor119$Any } from '../fn/profile-controller/descriptor-119-any';
import { Descriptor119$Any$Params } from '../fn/profile-controller/descriptor-119-any';
import { descriptor119$Json } from '../fn/profile-controller/descriptor-119-json';
import { Descriptor119$Json$Params } from '../fn/profile-controller/descriptor-119-json';
import { JsonSchema } from '../models/json-schema';
import { listAllFormsOfMetadata1 } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { ListAllFormsOfMetadata1$Params } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { RepresentationModelObject } from '../models/representation-model-object';

@Injectable({ providedIn: 'root' })
export class ProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listAllFormsOfMetadata1()` */
  static readonly ListAllFormsOfMetadata1Path = '/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAllFormsOfMetadata1()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1$Response(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<StrictHttpResponse<RepresentationModelObject>> {
    return listAllFormsOfMetadata1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAllFormsOfMetadata1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<RepresentationModelObject> {
    return this.listAllFormsOfMetadata1$Response(params, context).pipe(
      map((r: StrictHttpResponse<RepresentationModelObject>): RepresentationModelObject => r.body)
    );
  }

  /** Path part for operation `descriptor111()` */
  static readonly Descriptor111Path = '/profile/demandeurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any$Response(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor111$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor111$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json$Response(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor111$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor111$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor112()` */
  static readonly Descriptor112Path = '/profile/departements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor112$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Any$Response(params?: Descriptor112$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor112$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor112$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Any(params?: Descriptor112$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor112$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor112$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Json$Response(params?: Descriptor112$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor112$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor112$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor112$Json(params?: Descriptor112$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor112$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor113()` */
  static readonly Descriptor113Path = '/profile/emplois';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor113$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Any$Response(params?: Descriptor113$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor113$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor113$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Any(params?: Descriptor113$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor113$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor113$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Json$Response(params?: Descriptor113$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor113$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor113$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor113$Json(params?: Descriptor113$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor113$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor114()` */
  static readonly Descriptor114Path = '/profile/formations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor114$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Any$Response(params?: Descriptor114$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor114$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor114$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Any(params?: Descriptor114$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor114$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor114$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Json$Response(params?: Descriptor114$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor114$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor114$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor114$Json(params?: Descriptor114$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor114$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor115()` */
  static readonly Descriptor115Path = '/profile/handicaps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor115$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Any$Response(params?: Descriptor115$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor115$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor115$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Any(params?: Descriptor115$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor115$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor115$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Json$Response(params?: Descriptor115$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor115$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor115$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor115$Json(params?: Descriptor115$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor115$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor116()` */
  static readonly Descriptor116Path = '/profile/images';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor116$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Any$Response(params?: Descriptor116$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor116$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor116$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Any(params?: Descriptor116$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor116$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor116$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Json$Response(params?: Descriptor116$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor116$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor116$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor116$Json(params?: Descriptor116$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor116$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor117()` */
  static readonly Descriptor117Path = '/profile/matrimoiniales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor117$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor117$Any$Response(params?: Descriptor117$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor117$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor117$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor117$Any(params?: Descriptor117$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor117$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor117$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor117$Json$Response(params?: Descriptor117$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor117$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor117$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor117$Json(params?: Descriptor117$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor117$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor118()` */
  static readonly Descriptor118Path = '/profile/procesVerbals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor118$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor118$Any$Response(params?: Descriptor118$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor118$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor118$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor118$Any(params?: Descriptor118$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor118$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor118$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor118$Json$Response(params?: Descriptor118$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor118$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor118$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor118$Json(params?: Descriptor118$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor118$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor119()` */
  static readonly Descriptor119Path = '/profile/regions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor119$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor119$Any$Response(params?: Descriptor119$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor119$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor119$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor119$Any(params?: Descriptor119$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor119$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor119$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor119$Json$Response(params?: Descriptor119$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor119$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor119$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor119$Json(params?: Descriptor119$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor119$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor1110()` */
  static readonly Descriptor1110Path = '/profile/secteurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1110$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1110$Any$Response(params?: Descriptor1110$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor1110$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1110$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1110$Any(params?: Descriptor1110$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor1110$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1110$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1110$Json$Response(params?: Descriptor1110$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor1110$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1110$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1110$Json(params?: Descriptor1110$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor1110$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor1111()` */
  static readonly Descriptor1111Path = '/profile/sexes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1111$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1111$Any$Response(params?: Descriptor1111$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor1111$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1111$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1111$Any(params?: Descriptor1111$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor1111$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1111$Json$Response(params?: Descriptor1111$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor1111$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1111$Json(params?: Descriptor1111$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor1111$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

  /** Path part for operation `descriptor1112()` */
  static readonly Descriptor1112Path = '/profile/statuts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1112$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1112$Any$Response(params?: Descriptor1112$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor1112$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1112$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1112$Any(params?: Descriptor1112$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor1112$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor1112$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1112$Json$Response(params?: Descriptor1112$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor1112$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor1112$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor1112$Json(params?: Descriptor1112$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor1112$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

}
