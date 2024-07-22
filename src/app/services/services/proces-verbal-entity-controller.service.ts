/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceProcesverbalDelete } from '../fn/proces-verbal-entity-controller/delete-item-resource-procesverbal-delete';
import { DeleteItemResourceProcesverbalDelete$Params } from '../fn/proces-verbal-entity-controller/delete-item-resource-procesverbal-delete';
import { EntityModelProcesVerbal } from '../models/entity-model-proces-verbal';
import { getCollectionResourceProcesverbalGet1$Json } from '../fn/proces-verbal-entity-controller/get-collection-resource-procesverbal-get-1-json';
import { GetCollectionResourceProcesverbalGet1$Json$Params } from '../fn/proces-verbal-entity-controller/get-collection-resource-procesverbal-get-1-json';
import { getCollectionResourceProcesverbalGet1$UriList } from '../fn/proces-verbal-entity-controller/get-collection-resource-procesverbal-get-1-uri-list';
import { GetCollectionResourceProcesverbalGet1$UriList$Params } from '../fn/proces-verbal-entity-controller/get-collection-resource-procesverbal-get-1-uri-list';
import { getItemResourceProcesverbalGet } from '../fn/proces-verbal-entity-controller/get-item-resource-procesverbal-get';
import { GetItemResourceProcesverbalGet$Params } from '../fn/proces-verbal-entity-controller/get-item-resource-procesverbal-get';
import { PagedModelEntityModelProcesVerbal } from '../models/paged-model-entity-model-proces-verbal';
import { patchItemResourceProcesverbalPatch } from '../fn/proces-verbal-entity-controller/patch-item-resource-procesverbal-patch';
import { PatchItemResourceProcesverbalPatch$Params } from '../fn/proces-verbal-entity-controller/patch-item-resource-procesverbal-patch';
import { postCollectionResourceProcesverbalPost } from '../fn/proces-verbal-entity-controller/post-collection-resource-procesverbal-post';
import { PostCollectionResourceProcesverbalPost$Params } from '../fn/proces-verbal-entity-controller/post-collection-resource-procesverbal-post';
import { putItemResourceProcesverbalPut } from '../fn/proces-verbal-entity-controller/put-item-resource-procesverbal-put';
import { PutItemResourceProcesverbalPut$Params } from '../fn/proces-verbal-entity-controller/put-item-resource-procesverbal-put';

@Injectable({ providedIn: 'root' })
export class ProcesVerbalEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceProcesverbalGet1()` */
  static readonly GetCollectionResourceProcesverbalGet1Path = '/procesVerbals';

  /**
   * get-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceProcesverbalGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceProcesverbalGet1$Json$Response(params?: GetCollectionResourceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelProcesVerbal>> {
    return getCollectionResourceProcesverbalGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceProcesverbalGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceProcesverbalGet1$Json(params?: GetCollectionResourceProcesverbalGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelProcesVerbal> {
    return this.getCollectionResourceProcesverbalGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelProcesVerbal>): PagedModelEntityModelProcesVerbal => r.body)
    );
  }

  /**
   * get-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceProcesverbalGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceProcesverbalGet1$UriList$Response(params?: GetCollectionResourceProcesverbalGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceProcesverbalGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceProcesverbalGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceProcesverbalGet1$UriList(params?: GetCollectionResourceProcesverbalGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceProcesverbalGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceProcesverbalPost()` */
  static readonly PostCollectionResourceProcesverbalPostPath = '/procesVerbals';

  /**
   * create-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceProcesverbalPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceProcesverbalPost$Response(params: PostCollectionResourceProcesverbalPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return postCollectionResourceProcesverbalPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceProcesverbalPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceProcesverbalPost(params: PostCollectionResourceProcesverbalPost$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.postCollectionResourceProcesverbalPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `getItemResourceProcesverbalGet()` */
  static readonly GetItemResourceProcesverbalGetPath = '/procesVerbals/{id}';

  /**
   * get-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceProcesverbalGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceProcesverbalGet$Response(params: GetItemResourceProcesverbalGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return getItemResourceProcesverbalGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceProcesverbalGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceProcesverbalGet(params: GetItemResourceProcesverbalGet$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.getItemResourceProcesverbalGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `putItemResourceProcesverbalPut()` */
  static readonly PutItemResourceProcesverbalPutPath = '/procesVerbals/{id}';

  /**
   * update-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceProcesverbalPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceProcesverbalPut$Response(params: PutItemResourceProcesverbalPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return putItemResourceProcesverbalPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceProcesverbalPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceProcesverbalPut(params: PutItemResourceProcesverbalPut$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.putItemResourceProcesverbalPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceProcesverbalDelete()` */
  static readonly DeleteItemResourceProcesverbalDeletePath = '/procesVerbals/{id}';

  /**
   * delete-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceProcesverbalDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceProcesverbalDelete$Response(params: DeleteItemResourceProcesverbalDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceProcesverbalDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceProcesverbalDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceProcesverbalDelete(params: DeleteItemResourceProcesverbalDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceProcesverbalDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceProcesverbalPatch()` */
  static readonly PatchItemResourceProcesverbalPatchPath = '/procesVerbals/{id}';

  /**
   * patch-procesverbal
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceProcesverbalPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceProcesverbalPatch$Response(params: PatchItemResourceProcesverbalPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return patchItemResourceProcesverbalPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-procesverbal
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceProcesverbalPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceProcesverbalPatch(params: PatchItemResourceProcesverbalPatch$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.patchItemResourceProcesverbalPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

}
