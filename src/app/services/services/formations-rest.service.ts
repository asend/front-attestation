/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceFormationDelete } from '../fn/formations-rest/delete-item-resource-formation-delete';
import { DeleteItemResourceFormationDelete$Params } from '../fn/formations-rest/delete-item-resource-formation-delete';
import { EntityModelFormation } from '../models/entity-model-formation';
import { getCollectionResourceFormationGet1$Json } from '../fn/formations-rest/get-collection-resource-formation-get-1-json';
import { GetCollectionResourceFormationGet1$Json$Params } from '../fn/formations-rest/get-collection-resource-formation-get-1-json';
import { getCollectionResourceFormationGet1$UriList } from '../fn/formations-rest/get-collection-resource-formation-get-1-uri-list';
import { GetCollectionResourceFormationGet1$UriList$Params } from '../fn/formations-rest/get-collection-resource-formation-get-1-uri-list';
import { getItemResourceFormationGet } from '../fn/formations-rest/get-item-resource-formation-get';
import { GetItemResourceFormationGet$Params } from '../fn/formations-rest/get-item-resource-formation-get';
import { PagedModelEntityModelFormation } from '../models/paged-model-entity-model-formation';
import { patchItemResourceFormationPatch } from '../fn/formations-rest/patch-item-resource-formation-patch';
import { PatchItemResourceFormationPatch$Params } from '../fn/formations-rest/patch-item-resource-formation-patch';
import { postCollectionResourceFormationPost } from '../fn/formations-rest/post-collection-resource-formation-post';
import { PostCollectionResourceFormationPost$Params } from '../fn/formations-rest/post-collection-resource-formation-post';
import { putItemResourceFormationPut } from '../fn/formations-rest/put-item-resource-formation-put';
import { PutItemResourceFormationPut$Params } from '../fn/formations-rest/put-item-resource-formation-put';

@Injectable({ providedIn: 'root' })
export class FormationsRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceFormationGet1()` */
  static readonly GetCollectionResourceFormationGet1Path = '/formations';

  /**
   * get-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFormationGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFormationGet1$Json$Response(params?: GetCollectionResourceFormationGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelFormation>> {
    return getCollectionResourceFormationGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFormationGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFormationGet1$Json(params?: GetCollectionResourceFormationGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelFormation> {
    return this.getCollectionResourceFormationGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFormation>): PagedModelEntityModelFormation => r.body)
    );
  }

  /**
   * get-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFormationGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFormationGet1$UriList$Response(params?: GetCollectionResourceFormationGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceFormationGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFormationGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFormationGet1$UriList(params?: GetCollectionResourceFormationGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceFormationGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceFormationPost()` */
  static readonly PostCollectionResourceFormationPostPath = '/formations';

  /**
   * create-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceFormationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFormationPost$Response(params: PostCollectionResourceFormationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return postCollectionResourceFormationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceFormationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFormationPost(params: PostCollectionResourceFormationPost$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.postCollectionResourceFormationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `getItemResourceFormationGet()` */
  static readonly GetItemResourceFormationGetPath = '/formations/{id}';

  /**
   * get-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceFormationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFormationGet$Response(params: GetItemResourceFormationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return getItemResourceFormationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceFormationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFormationGet(params: GetItemResourceFormationGet$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.getItemResourceFormationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `putItemResourceFormationPut()` */
  static readonly PutItemResourceFormationPutPath = '/formations/{id}';

  /**
   * update-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceFormationPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFormationPut$Response(params: PutItemResourceFormationPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return putItemResourceFormationPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceFormationPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFormationPut(params: PutItemResourceFormationPut$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.putItemResourceFormationPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceFormationDelete()` */
  static readonly DeleteItemResourceFormationDeletePath = '/formations/{id}';

  /**
   * delete-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceFormationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFormationDelete$Response(params: DeleteItemResourceFormationDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceFormationDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceFormationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFormationDelete(params: DeleteItemResourceFormationDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceFormationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceFormationPatch()` */
  static readonly PatchItemResourceFormationPatchPath = '/formations/{id}';

  /**
   * patch-formation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceFormationPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFormationPatch$Response(params: PatchItemResourceFormationPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return patchItemResourceFormationPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-formation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceFormationPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFormationPatch(params: PatchItemResourceFormationPatch$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.patchItemResourceFormationPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

}
