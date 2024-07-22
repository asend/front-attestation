/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceHandicapDelete } from '../fn/handicaps-rest/delete-item-resource-handicap-delete';
import { DeleteItemResourceHandicapDelete$Params } from '../fn/handicaps-rest/delete-item-resource-handicap-delete';
import { EntityModelHandicap } from '../models/entity-model-handicap';
import { getCollectionResourceHandicapGet1$Json } from '../fn/handicaps-rest/get-collection-resource-handicap-get-1-json';
import { GetCollectionResourceHandicapGet1$Json$Params } from '../fn/handicaps-rest/get-collection-resource-handicap-get-1-json';
import { getCollectionResourceHandicapGet1$UriList } from '../fn/handicaps-rest/get-collection-resource-handicap-get-1-uri-list';
import { GetCollectionResourceHandicapGet1$UriList$Params } from '../fn/handicaps-rest/get-collection-resource-handicap-get-1-uri-list';
import { getItemResourceHandicapGet } from '../fn/handicaps-rest/get-item-resource-handicap-get';
import { GetItemResourceHandicapGet$Params } from '../fn/handicaps-rest/get-item-resource-handicap-get';
import { PagedModelEntityModelHandicap } from '../models/paged-model-entity-model-handicap';
import { patchItemResourceHandicapPatch } from '../fn/handicaps-rest/patch-item-resource-handicap-patch';
import { PatchItemResourceHandicapPatch$Params } from '../fn/handicaps-rest/patch-item-resource-handicap-patch';
import { postCollectionResourceHandicapPost } from '../fn/handicaps-rest/post-collection-resource-handicap-post';
import { PostCollectionResourceHandicapPost$Params } from '../fn/handicaps-rest/post-collection-resource-handicap-post';
import { putItemResourceHandicapPut } from '../fn/handicaps-rest/put-item-resource-handicap-put';
import { PutItemResourceHandicapPut$Params } from '../fn/handicaps-rest/put-item-resource-handicap-put';

@Injectable({ providedIn: 'root' })
export class HandicapsRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceHandicapGet1()` */
  static readonly GetCollectionResourceHandicapGet1Path = '/handicaps';

  /**
   * get-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceHandicapGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceHandicapGet1$Json$Response(params?: GetCollectionResourceHandicapGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelHandicap>> {
    return getCollectionResourceHandicapGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceHandicapGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceHandicapGet1$Json(params?: GetCollectionResourceHandicapGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelHandicap> {
    return this.getCollectionResourceHandicapGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelHandicap>): PagedModelEntityModelHandicap => r.body)
    );
  }

  /**
   * get-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceHandicapGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceHandicapGet1$UriList$Response(params?: GetCollectionResourceHandicapGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceHandicapGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceHandicapGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceHandicapGet1$UriList(params?: GetCollectionResourceHandicapGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceHandicapGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceHandicapPost()` */
  static readonly PostCollectionResourceHandicapPostPath = '/handicaps';

  /**
   * create-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceHandicapPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceHandicapPost$Response(params: PostCollectionResourceHandicapPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
    return postCollectionResourceHandicapPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceHandicapPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceHandicapPost(params: PostCollectionResourceHandicapPost$Params, context?: HttpContext): Observable<EntityModelHandicap> {
    return this.postCollectionResourceHandicapPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelHandicap>): EntityModelHandicap => r.body)
    );
  }

  /** Path part for operation `getItemResourceHandicapGet()` */
  static readonly GetItemResourceHandicapGetPath = '/handicaps/{id}';

  /**
   * get-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceHandicapGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceHandicapGet$Response(params: GetItemResourceHandicapGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
    return getItemResourceHandicapGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceHandicapGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceHandicapGet(params: GetItemResourceHandicapGet$Params, context?: HttpContext): Observable<EntityModelHandicap> {
    return this.getItemResourceHandicapGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelHandicap>): EntityModelHandicap => r.body)
    );
  }

  /** Path part for operation `putItemResourceHandicapPut()` */
  static readonly PutItemResourceHandicapPutPath = '/handicaps/{id}';

  /**
   * update-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceHandicapPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceHandicapPut$Response(params: PutItemResourceHandicapPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
    return putItemResourceHandicapPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceHandicapPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceHandicapPut(params: PutItemResourceHandicapPut$Params, context?: HttpContext): Observable<EntityModelHandicap> {
    return this.putItemResourceHandicapPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelHandicap>): EntityModelHandicap => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceHandicapDelete()` */
  static readonly DeleteItemResourceHandicapDeletePath = '/handicaps/{id}';

  /**
   * delete-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceHandicapDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceHandicapDelete$Response(params: DeleteItemResourceHandicapDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceHandicapDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceHandicapDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceHandicapDelete(params: DeleteItemResourceHandicapDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceHandicapDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceHandicapPatch()` */
  static readonly PatchItemResourceHandicapPatchPath = '/handicaps/{id}';

  /**
   * patch-handicap
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceHandicapPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceHandicapPatch$Response(params: PatchItemResourceHandicapPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelHandicap>> {
    return patchItemResourceHandicapPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-handicap
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceHandicapPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceHandicapPatch(params: PatchItemResourceHandicapPatch$Params, context?: HttpContext): Observable<EntityModelHandicap> {
    return this.patchItemResourceHandicapPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelHandicap>): EntityModelHandicap => r.body)
    );
  }

}
