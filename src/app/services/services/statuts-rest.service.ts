/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceStatutDelete } from '../fn/statuts-rest/delete-item-resource-statut-delete';
import { DeleteItemResourceStatutDelete$Params } from '../fn/statuts-rest/delete-item-resource-statut-delete';
import { EntityModelStatut } from '../models/entity-model-statut';
import { getCollectionResourceStatutGet1$Json } from '../fn/statuts-rest/get-collection-resource-statut-get-1-json';
import { GetCollectionResourceStatutGet1$Json$Params } from '../fn/statuts-rest/get-collection-resource-statut-get-1-json';
import { getCollectionResourceStatutGet1$UriList } from '../fn/statuts-rest/get-collection-resource-statut-get-1-uri-list';
import { GetCollectionResourceStatutGet1$UriList$Params } from '../fn/statuts-rest/get-collection-resource-statut-get-1-uri-list';
import { getItemResourceStatutGet } from '../fn/statuts-rest/get-item-resource-statut-get';
import { GetItemResourceStatutGet$Params } from '../fn/statuts-rest/get-item-resource-statut-get';
import { PagedModelEntityModelStatut } from '../models/paged-model-entity-model-statut';
import { patchItemResourceStatutPatch } from '../fn/statuts-rest/patch-item-resource-statut-patch';
import { PatchItemResourceStatutPatch$Params } from '../fn/statuts-rest/patch-item-resource-statut-patch';
import { postCollectionResourceStatutPost } from '../fn/statuts-rest/post-collection-resource-statut-post';
import { PostCollectionResourceStatutPost$Params } from '../fn/statuts-rest/post-collection-resource-statut-post';
import { putItemResourceStatutPut } from '../fn/statuts-rest/put-item-resource-statut-put';
import { PutItemResourceStatutPut$Params } from '../fn/statuts-rest/put-item-resource-statut-put';

@Injectable({ providedIn: 'root' })
export class StatutsRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceStatutGet1()` */
  static readonly GetCollectionResourceStatutGet1Path = '/statuts';

  /**
   * get-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceStatutGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStatutGet1$Json$Response(params?: GetCollectionResourceStatutGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelStatut>> {
    return getCollectionResourceStatutGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceStatutGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStatutGet1$Json(params?: GetCollectionResourceStatutGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelStatut> {
    return this.getCollectionResourceStatutGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelStatut>): PagedModelEntityModelStatut => r.body)
    );
  }

  /**
   * get-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceStatutGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStatutGet1$UriList$Response(params?: GetCollectionResourceStatutGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceStatutGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceStatutGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStatutGet1$UriList(params?: GetCollectionResourceStatutGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceStatutGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceStatutPost()` */
  static readonly PostCollectionResourceStatutPostPath = '/statuts';

  /**
   * create-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceStatutPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceStatutPost$Response(params: PostCollectionResourceStatutPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return postCollectionResourceStatutPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceStatutPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceStatutPost(params: PostCollectionResourceStatutPost$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.postCollectionResourceStatutPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `getItemResourceStatutGet()` */
  static readonly GetItemResourceStatutGetPath = '/statuts/{id}';

  /**
   * get-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceStatutGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceStatutGet$Response(params: GetItemResourceStatutGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return getItemResourceStatutGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceStatutGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceStatutGet(params: GetItemResourceStatutGet$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.getItemResourceStatutGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `putItemResourceStatutPut()` */
  static readonly PutItemResourceStatutPutPath = '/statuts/{id}';

  /**
   * update-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceStatutPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceStatutPut$Response(params: PutItemResourceStatutPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return putItemResourceStatutPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceStatutPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceStatutPut(params: PutItemResourceStatutPut$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.putItemResourceStatutPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceStatutDelete()` */
  static readonly DeleteItemResourceStatutDeletePath = '/statuts/{id}';

  /**
   * delete-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceStatutDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceStatutDelete$Response(params: DeleteItemResourceStatutDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceStatutDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceStatutDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceStatutDelete(params: DeleteItemResourceStatutDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceStatutDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceStatutPatch()` */
  static readonly PatchItemResourceStatutPatchPath = '/statuts/{id}';

  /**
   * patch-statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceStatutPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceStatutPatch$Response(params: PatchItemResourceStatutPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return patchItemResourceStatutPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceStatutPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceStatutPatch(params: PatchItemResourceStatutPatch$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.patchItemResourceStatutPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

}
