/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceEmploiDelete } from '../fn/emploi-entity-controller/delete-item-resource-emploi-delete';
import { DeleteItemResourceEmploiDelete$Params } from '../fn/emploi-entity-controller/delete-item-resource-emploi-delete';
import { EntityModelEmploi } from '../models/entity-model-emploi';
import { getCollectionResourceEmploiGet1$Json } from '../fn/emploi-entity-controller/get-collection-resource-emploi-get-1-json';
import { GetCollectionResourceEmploiGet1$Json$Params } from '../fn/emploi-entity-controller/get-collection-resource-emploi-get-1-json';
import { getCollectionResourceEmploiGet1$UriList } from '../fn/emploi-entity-controller/get-collection-resource-emploi-get-1-uri-list';
import { GetCollectionResourceEmploiGet1$UriList$Params } from '../fn/emploi-entity-controller/get-collection-resource-emploi-get-1-uri-list';
import { getItemResourceEmploiGet } from '../fn/emploi-entity-controller/get-item-resource-emploi-get';
import { GetItemResourceEmploiGet$Params } from '../fn/emploi-entity-controller/get-item-resource-emploi-get';
import { PagedModelEntityModelEmploi } from '../models/paged-model-entity-model-emploi';
import { patchItemResourceEmploiPatch } from '../fn/emploi-entity-controller/patch-item-resource-emploi-patch';
import { PatchItemResourceEmploiPatch$Params } from '../fn/emploi-entity-controller/patch-item-resource-emploi-patch';
import { postCollectionResourceEmploiPost } from '../fn/emploi-entity-controller/post-collection-resource-emploi-post';
import { PostCollectionResourceEmploiPost$Params } from '../fn/emploi-entity-controller/post-collection-resource-emploi-post';
import { putItemResourceEmploiPut } from '../fn/emploi-entity-controller/put-item-resource-emploi-put';
import { PutItemResourceEmploiPut$Params } from '../fn/emploi-entity-controller/put-item-resource-emploi-put';

@Injectable({ providedIn: 'root' })
export class EmploiEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceEmploiGet1()` */
  static readonly GetCollectionResourceEmploiGet1Path = '/emplois';

  /**
   * get-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceEmploiGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmploiGet1$Json$Response(params?: GetCollectionResourceEmploiGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelEmploi>> {
    return getCollectionResourceEmploiGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceEmploiGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmploiGet1$Json(params?: GetCollectionResourceEmploiGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelEmploi> {
    return this.getCollectionResourceEmploiGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelEmploi>): PagedModelEntityModelEmploi => r.body)
    );
  }

  /**
   * get-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceEmploiGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmploiGet1$UriList$Response(params?: GetCollectionResourceEmploiGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceEmploiGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceEmploiGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmploiGet1$UriList(params?: GetCollectionResourceEmploiGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceEmploiGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceEmploiPost()` */
  static readonly PostCollectionResourceEmploiPostPath = '/emplois';

  /**
   * create-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceEmploiPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceEmploiPost$Response(params: PostCollectionResourceEmploiPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
    return postCollectionResourceEmploiPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceEmploiPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceEmploiPost(params: PostCollectionResourceEmploiPost$Params, context?: HttpContext): Observable<EntityModelEmploi> {
    return this.postCollectionResourceEmploiPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmploi>): EntityModelEmploi => r.body)
    );
  }

  /** Path part for operation `getItemResourceEmploiGet()` */
  static readonly GetItemResourceEmploiGetPath = '/emplois/{id}';

  /**
   * get-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceEmploiGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceEmploiGet$Response(params: GetItemResourceEmploiGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
    return getItemResourceEmploiGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceEmploiGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceEmploiGet(params: GetItemResourceEmploiGet$Params, context?: HttpContext): Observable<EntityModelEmploi> {
    return this.getItemResourceEmploiGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmploi>): EntityModelEmploi => r.body)
    );
  }

  /** Path part for operation `putItemResourceEmploiPut()` */
  static readonly PutItemResourceEmploiPutPath = '/emplois/{id}';

  /**
   * update-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceEmploiPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceEmploiPut$Response(params: PutItemResourceEmploiPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
    return putItemResourceEmploiPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceEmploiPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceEmploiPut(params: PutItemResourceEmploiPut$Params, context?: HttpContext): Observable<EntityModelEmploi> {
    return this.putItemResourceEmploiPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmploi>): EntityModelEmploi => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceEmploiDelete()` */
  static readonly DeleteItemResourceEmploiDeletePath = '/emplois/{id}';

  /**
   * delete-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceEmploiDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceEmploiDelete$Response(params: DeleteItemResourceEmploiDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceEmploiDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceEmploiDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceEmploiDelete(params: DeleteItemResourceEmploiDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceEmploiDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceEmploiPatch()` */
  static readonly PatchItemResourceEmploiPatchPath = '/emplois/{id}';

  /**
   * patch-emploi
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceEmploiPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceEmploiPatch$Response(params: PatchItemResourceEmploiPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmploi>> {
    return patchItemResourceEmploiPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-emploi
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceEmploiPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceEmploiPatch(params: PatchItemResourceEmploiPatch$Params, context?: HttpContext): Observable<EntityModelEmploi> {
    return this.patchItemResourceEmploiPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmploi>): EntityModelEmploi => r.body)
    );
  }

}
