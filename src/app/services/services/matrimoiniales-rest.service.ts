/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceSituationmatrimoinialeDelete } from '../fn/matrimoiniales-rest/delete-item-resource-situationmatrimoiniale-delete';
import { DeleteItemResourceSituationmatrimoinialeDelete$Params } from '../fn/matrimoiniales-rest/delete-item-resource-situationmatrimoiniale-delete';
import { EntityModelSituationMatrimoiniale } from '../models/entity-model-situation-matrimoiniale';
import { getCollectionResourceSituationmatrimoinialeGet1$Json } from '../fn/matrimoiniales-rest/get-collection-resource-situationmatrimoiniale-get-1-json';
import { GetCollectionResourceSituationmatrimoinialeGet1$Json$Params } from '../fn/matrimoiniales-rest/get-collection-resource-situationmatrimoiniale-get-1-json';
import { getCollectionResourceSituationmatrimoinialeGet1$UriList } from '../fn/matrimoiniales-rest/get-collection-resource-situationmatrimoiniale-get-1-uri-list';
import { GetCollectionResourceSituationmatrimoinialeGet1$UriList$Params } from '../fn/matrimoiniales-rest/get-collection-resource-situationmatrimoiniale-get-1-uri-list';
import { getItemResourceSituationmatrimoinialeGet } from '../fn/matrimoiniales-rest/get-item-resource-situationmatrimoiniale-get';
import { GetItemResourceSituationmatrimoinialeGet$Params } from '../fn/matrimoiniales-rest/get-item-resource-situationmatrimoiniale-get';
import { PagedModelEntityModelSituationMatrimoiniale } from '../models/paged-model-entity-model-situation-matrimoiniale';
import { patchItemResourceSituationmatrimoinialePatch } from '../fn/matrimoiniales-rest/patch-item-resource-situationmatrimoiniale-patch';
import { PatchItemResourceSituationmatrimoinialePatch$Params } from '../fn/matrimoiniales-rest/patch-item-resource-situationmatrimoiniale-patch';
import { postCollectionResourceSituationmatrimoinialePost } from '../fn/matrimoiniales-rest/post-collection-resource-situationmatrimoiniale-post';
import { PostCollectionResourceSituationmatrimoinialePost$Params } from '../fn/matrimoiniales-rest/post-collection-resource-situationmatrimoiniale-post';
import { putItemResourceSituationmatrimoinialePut } from '../fn/matrimoiniales-rest/put-item-resource-situationmatrimoiniale-put';
import { PutItemResourceSituationmatrimoinialePut$Params } from '../fn/matrimoiniales-rest/put-item-resource-situationmatrimoiniale-put';

@Injectable({ providedIn: 'root' })
export class MatrimoinialesRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceSituationmatrimoinialeGet1()` */
  static readonly GetCollectionResourceSituationmatrimoinialeGet1Path = '/matrimoiniales';

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSituationmatrimoinialeGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSituationmatrimoinialeGet1$Json$Response(params?: GetCollectionResourceSituationmatrimoinialeGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelSituationMatrimoiniale>> {
    return getCollectionResourceSituationmatrimoinialeGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSituationmatrimoinialeGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSituationmatrimoinialeGet1$Json(params?: GetCollectionResourceSituationmatrimoinialeGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelSituationMatrimoiniale> {
    return this.getCollectionResourceSituationmatrimoinialeGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelSituationMatrimoiniale>): PagedModelEntityModelSituationMatrimoiniale => r.body)
    );
  }

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSituationmatrimoinialeGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSituationmatrimoinialeGet1$UriList$Response(params?: GetCollectionResourceSituationmatrimoinialeGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceSituationmatrimoinialeGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSituationmatrimoinialeGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSituationmatrimoinialeGet1$UriList(params?: GetCollectionResourceSituationmatrimoinialeGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceSituationmatrimoinialeGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceSituationmatrimoinialePost()` */
  static readonly PostCollectionResourceSituationmatrimoinialePostPath = '/matrimoiniales';

  /**
   * create-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceSituationmatrimoinialePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSituationmatrimoinialePost$Response(params: PostCollectionResourceSituationmatrimoinialePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return postCollectionResourceSituationmatrimoinialePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceSituationmatrimoinialePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSituationmatrimoinialePost(params: PostCollectionResourceSituationmatrimoinialePost$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.postCollectionResourceSituationmatrimoinialePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `getItemResourceSituationmatrimoinialeGet()` */
  static readonly GetItemResourceSituationmatrimoinialeGetPath = '/matrimoiniales/{id}';

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceSituationmatrimoinialeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSituationmatrimoinialeGet$Response(params: GetItemResourceSituationmatrimoinialeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return getItemResourceSituationmatrimoinialeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceSituationmatrimoinialeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSituationmatrimoinialeGet(params: GetItemResourceSituationmatrimoinialeGet$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.getItemResourceSituationmatrimoinialeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `putItemResourceSituationmatrimoinialePut()` */
  static readonly PutItemResourceSituationmatrimoinialePutPath = '/matrimoiniales/{id}';

  /**
   * update-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceSituationmatrimoinialePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSituationmatrimoinialePut$Response(params: PutItemResourceSituationmatrimoinialePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return putItemResourceSituationmatrimoinialePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceSituationmatrimoinialePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSituationmatrimoinialePut(params: PutItemResourceSituationmatrimoinialePut$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.putItemResourceSituationmatrimoinialePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceSituationmatrimoinialeDelete()` */
  static readonly DeleteItemResourceSituationmatrimoinialeDeletePath = '/matrimoiniales/{id}';

  /**
   * delete-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceSituationmatrimoinialeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSituationmatrimoinialeDelete$Response(params: DeleteItemResourceSituationmatrimoinialeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceSituationmatrimoinialeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceSituationmatrimoinialeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSituationmatrimoinialeDelete(params: DeleteItemResourceSituationmatrimoinialeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceSituationmatrimoinialeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceSituationmatrimoinialePatch()` */
  static readonly PatchItemResourceSituationmatrimoinialePatchPath = '/matrimoiniales/{id}';

  /**
   * patch-situationmatrimoiniale
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceSituationmatrimoinialePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSituationmatrimoinialePatch$Response(params: PatchItemResourceSituationmatrimoinialePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return patchItemResourceSituationmatrimoinialePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-situationmatrimoiniale
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceSituationmatrimoinialePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSituationmatrimoinialePatch(params: PatchItemResourceSituationmatrimoinialePatch$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.patchItemResourceSituationmatrimoinialePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

}
