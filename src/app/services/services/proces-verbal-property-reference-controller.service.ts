/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceProcesverbalPatch$Json } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-patch-json';
import { CreatePropertyReferenceProcesverbalPatch$Json$Params } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-patch-json';
import { createPropertyReferenceProcesverbalPatch$UriList } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-patch-uri-list';
import { CreatePropertyReferenceProcesverbalPatch$UriList$Params } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-patch-uri-list';
import { createPropertyReferenceProcesverbalPut$Json } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-put-json';
import { CreatePropertyReferenceProcesverbalPut$Json$Params } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-put-json';
import { createPropertyReferenceProcesverbalPut$UriList } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-put-uri-list';
import { CreatePropertyReferenceProcesverbalPut$UriList$Params } from '../fn/proces-verbal-property-reference-controller/create-property-reference-procesverbal-put-uri-list';
import { deletePropertyReferenceIdProcesverbalDelete } from '../fn/proces-verbal-property-reference-controller/delete-property-reference-id-procesverbal-delete';
import { DeletePropertyReferenceIdProcesverbalDelete$Params } from '../fn/proces-verbal-property-reference-controller/delete-property-reference-id-procesverbal-delete';
import { deletePropertyReferenceProcesverbalDelete } from '../fn/proces-verbal-property-reference-controller/delete-property-reference-procesverbal-delete';
import { DeletePropertyReferenceProcesverbalDelete$Params } from '../fn/proces-verbal-property-reference-controller/delete-property-reference-procesverbal-delete';
import { EntityModelStatut } from '../models/entity-model-statut';
import { followPropertyReferenceProcesverbalGet } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get';
import { FollowPropertyReferenceProcesverbalGet$Params } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get';
import { followPropertyReferenceProcesverbalGet1$Json } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get-1-json';
import { FollowPropertyReferenceProcesverbalGet1$Json$Params } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get-1-json';
import { followPropertyReferenceProcesverbalGet1$UriList } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get-1-uri-list';
import { FollowPropertyReferenceProcesverbalGet1$UriList$Params } from '../fn/proces-verbal-property-reference-controller/follow-property-reference-procesverbal-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class ProcesVerbalPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceProcesverbalGet1()` */
  static readonly FollowPropertyReferenceProcesverbalGet1Path = '/procesVerbals/{id}/statut';

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceProcesverbalGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet1$Json$Response(params: FollowPropertyReferenceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return followPropertyReferenceProcesverbalGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceProcesverbalGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet1$Json(params: FollowPropertyReferenceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.followPropertyReferenceProcesverbalGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceProcesverbalGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet1$UriList$Response(params: FollowPropertyReferenceProcesverbalGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceProcesverbalGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceProcesverbalGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet1$UriList(params: FollowPropertyReferenceProcesverbalGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceProcesverbalGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceProcesverbalPut()` */
  static readonly CreatePropertyReferenceProcesverbalPutPath = '/procesVerbals/{id}/statut';

  /**
   * update-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceProcesverbalPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceProcesverbalPut$Json$Response(params: CreatePropertyReferenceProcesverbalPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceProcesverbalPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceProcesverbalPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceProcesverbalPut$Json(params: CreatePropertyReferenceProcesverbalPut$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceProcesverbalPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * update-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceProcesverbalPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceProcesverbalPut$UriList$Response(params: CreatePropertyReferenceProcesverbalPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceProcesverbalPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceProcesverbalPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceProcesverbalPut$UriList(params: CreatePropertyReferenceProcesverbalPut$UriList$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceProcesverbalPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceProcesverbalDelete()` */
  static readonly DeletePropertyReferenceProcesverbalDeletePath = '/procesVerbals/{id}/statut';

  /**
   * delete-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceProcesverbalDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceProcesverbalDelete$Response(params: DeletePropertyReferenceProcesverbalDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceProcesverbalDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceProcesverbalDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceProcesverbalDelete(params: DeletePropertyReferenceProcesverbalDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceProcesverbalDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceProcesverbalPatch()` */
  static readonly CreatePropertyReferenceProcesverbalPatchPath = '/procesVerbals/{id}/statut';

  /**
   * patch-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceProcesverbalPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceProcesverbalPatch$Json$Response(params: CreatePropertyReferenceProcesverbalPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceProcesverbalPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceProcesverbalPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceProcesverbalPatch$Json(params: CreatePropertyReferenceProcesverbalPatch$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceProcesverbalPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * patch-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceProcesverbalPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceProcesverbalPatch$UriList$Response(params: CreatePropertyReferenceProcesverbalPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceProcesverbalPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceProcesverbalPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceProcesverbalPatch$UriList(params: CreatePropertyReferenceProcesverbalPatch$UriList$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceProcesverbalPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceProcesverbalGet()` */
  static readonly FollowPropertyReferenceProcesverbalGetPath = '/procesVerbals/{id}/statut/{propertyId}';

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceProcesverbalGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet$Response(params: FollowPropertyReferenceProcesverbalGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return followPropertyReferenceProcesverbalGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceProcesverbalGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceProcesverbalGet(params: FollowPropertyReferenceProcesverbalGet$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.followPropertyReferenceProcesverbalGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdProcesverbalDelete()` */
  static readonly DeletePropertyReferenceIdProcesverbalDeletePath = '/procesVerbals/{id}/statut/{propertyId}';

  /**
   * delete-statut-by-procesverbal-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdProcesverbalDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdProcesverbalDelete$Response(params: DeletePropertyReferenceIdProcesverbalDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdProcesverbalDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-statut-by-procesverbal-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdProcesverbalDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdProcesverbalDelete(params: DeletePropertyReferenceIdProcesverbalDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdProcesverbalDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
