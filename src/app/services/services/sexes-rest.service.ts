/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceSexeDelete } from '../fn/sexes-rest/delete-item-resource-sexe-delete';
import { DeleteItemResourceSexeDelete$Params } from '../fn/sexes-rest/delete-item-resource-sexe-delete';
import { EntityModelSexe } from '../models/entity-model-sexe';
import { getCollectionResourceSexeGet1$Json } from '../fn/sexes-rest/get-collection-resource-sexe-get-1-json';
import { GetCollectionResourceSexeGet1$Json$Params } from '../fn/sexes-rest/get-collection-resource-sexe-get-1-json';
import { getCollectionResourceSexeGet1$UriList } from '../fn/sexes-rest/get-collection-resource-sexe-get-1-uri-list';
import { GetCollectionResourceSexeGet1$UriList$Params } from '../fn/sexes-rest/get-collection-resource-sexe-get-1-uri-list';
import { getItemResourceSexeGet } from '../fn/sexes-rest/get-item-resource-sexe-get';
import { GetItemResourceSexeGet$Params } from '../fn/sexes-rest/get-item-resource-sexe-get';
import { PagedModelEntityModelSexe } from '../models/paged-model-entity-model-sexe';
import { patchItemResourceSexePatch } from '../fn/sexes-rest/patch-item-resource-sexe-patch';
import { PatchItemResourceSexePatch$Params } from '../fn/sexes-rest/patch-item-resource-sexe-patch';
import { postCollectionResourceSexePost } from '../fn/sexes-rest/post-collection-resource-sexe-post';
import { PostCollectionResourceSexePost$Params } from '../fn/sexes-rest/post-collection-resource-sexe-post';
import { putItemResourceSexePut } from '../fn/sexes-rest/put-item-resource-sexe-put';
import { PutItemResourceSexePut$Params } from '../fn/sexes-rest/put-item-resource-sexe-put';

@Injectable({ providedIn: 'root' })
export class SexesRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceSexeGet1()` */
  static readonly GetCollectionResourceSexeGet1Path = '/sexes';

  /**
   * get-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSexeGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSexeGet1$Json$Response(params?: GetCollectionResourceSexeGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelSexe>> {
    return getCollectionResourceSexeGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSexeGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSexeGet1$Json(params?: GetCollectionResourceSexeGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelSexe> {
    return this.getCollectionResourceSexeGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelSexe>): PagedModelEntityModelSexe => r.body)
    );
  }

  /**
   * get-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSexeGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSexeGet1$UriList$Response(params?: GetCollectionResourceSexeGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceSexeGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSexeGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSexeGet1$UriList(params?: GetCollectionResourceSexeGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceSexeGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceSexePost()` */
  static readonly PostCollectionResourceSexePostPath = '/sexes';

  /**
   * create-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceSexePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSexePost$Response(params: PostCollectionResourceSexePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return postCollectionResourceSexePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceSexePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSexePost(params: PostCollectionResourceSexePost$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.postCollectionResourceSexePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `getItemResourceSexeGet()` */
  static readonly GetItemResourceSexeGetPath = '/sexes/{id}';

  /**
   * get-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceSexeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSexeGet$Response(params: GetItemResourceSexeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return getItemResourceSexeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceSexeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSexeGet(params: GetItemResourceSexeGet$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.getItemResourceSexeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `putItemResourceSexePut()` */
  static readonly PutItemResourceSexePutPath = '/sexes/{id}';

  /**
   * update-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceSexePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSexePut$Response(params: PutItemResourceSexePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return putItemResourceSexePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceSexePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSexePut(params: PutItemResourceSexePut$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.putItemResourceSexePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceSexeDelete()` */
  static readonly DeleteItemResourceSexeDeletePath = '/sexes/{id}';

  /**
   * delete-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceSexeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSexeDelete$Response(params: DeleteItemResourceSexeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceSexeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceSexeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSexeDelete(params: DeleteItemResourceSexeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceSexeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceSexePatch()` */
  static readonly PatchItemResourceSexePatchPath = '/sexes/{id}';

  /**
   * patch-sexe
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceSexePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSexePatch$Response(params: PatchItemResourceSexePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return patchItemResourceSexePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-sexe
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceSexePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSexePatch(params: PatchItemResourceSexePatch$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.patchItemResourceSexePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

}
