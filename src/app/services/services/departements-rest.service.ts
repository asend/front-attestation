/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceDepartementDelete } from '../fn/departements-rest/delete-item-resource-departement-delete';
import { DeleteItemResourceDepartementDelete$Params } from '../fn/departements-rest/delete-item-resource-departement-delete';
import { EntityModelDepartement } from '../models/entity-model-departement';
import { getCollectionResourceDepartementGet1$Json } from '../fn/departements-rest/get-collection-resource-departement-get-1-json';
import { GetCollectionResourceDepartementGet1$Json$Params } from '../fn/departements-rest/get-collection-resource-departement-get-1-json';
import { getCollectionResourceDepartementGet1$UriList } from '../fn/departements-rest/get-collection-resource-departement-get-1-uri-list';
import { GetCollectionResourceDepartementGet1$UriList$Params } from '../fn/departements-rest/get-collection-resource-departement-get-1-uri-list';
import { getItemResourceDepartementGet } from '../fn/departements-rest/get-item-resource-departement-get';
import { GetItemResourceDepartementGet$Params } from '../fn/departements-rest/get-item-resource-departement-get';
import { PagedModelEntityModelDepartement } from '../models/paged-model-entity-model-departement';
import { patchItemResourceDepartementPatch } from '../fn/departements-rest/patch-item-resource-departement-patch';
import { PatchItemResourceDepartementPatch$Params } from '../fn/departements-rest/patch-item-resource-departement-patch';
import { postCollectionResourceDepartementPost } from '../fn/departements-rest/post-collection-resource-departement-post';
import { PostCollectionResourceDepartementPost$Params } from '../fn/departements-rest/post-collection-resource-departement-post';
import { putItemResourceDepartementPut } from '../fn/departements-rest/put-item-resource-departement-put';
import { PutItemResourceDepartementPut$Params } from '../fn/departements-rest/put-item-resource-departement-put';

@Injectable({ providedIn: 'root' })
export class DepartementsRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceDepartementGet1()` */
  static readonly GetCollectionResourceDepartementGet1Path = '/departements';

  /**
   * get-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDepartementGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDepartementGet1$Json$Response(params?: GetCollectionResourceDepartementGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelDepartement>> {
    return getCollectionResourceDepartementGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDepartementGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDepartementGet1$Json(params?: GetCollectionResourceDepartementGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelDepartement> {
    return this.getCollectionResourceDepartementGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelDepartement>): PagedModelEntityModelDepartement => r.body)
    );
  }

  /**
   * get-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDepartementGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDepartementGet1$UriList$Response(params?: GetCollectionResourceDepartementGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceDepartementGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDepartementGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDepartementGet1$UriList(params?: GetCollectionResourceDepartementGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceDepartementGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceDepartementPost()` */
  static readonly PostCollectionResourceDepartementPostPath = '/departements';

  /**
   * create-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceDepartementPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDepartementPost$Response(params: PostCollectionResourceDepartementPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return postCollectionResourceDepartementPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceDepartementPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDepartementPost(params: PostCollectionResourceDepartementPost$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.postCollectionResourceDepartementPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `getItemResourceDepartementGet()` */
  static readonly GetItemResourceDepartementGetPath = '/departements/{id}';

  /**
   * get-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceDepartementGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDepartementGet$Response(params: GetItemResourceDepartementGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return getItemResourceDepartementGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceDepartementGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDepartementGet(params: GetItemResourceDepartementGet$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.getItemResourceDepartementGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `putItemResourceDepartementPut()` */
  static readonly PutItemResourceDepartementPutPath = '/departements/{id}';

  /**
   * update-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceDepartementPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDepartementPut$Response(params: PutItemResourceDepartementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return putItemResourceDepartementPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceDepartementPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDepartementPut(params: PutItemResourceDepartementPut$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.putItemResourceDepartementPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceDepartementDelete()` */
  static readonly DeleteItemResourceDepartementDeletePath = '/departements/{id}';

  /**
   * delete-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceDepartementDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDepartementDelete$Response(params: DeleteItemResourceDepartementDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceDepartementDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceDepartementDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDepartementDelete(params: DeleteItemResourceDepartementDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceDepartementDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceDepartementPatch()` */
  static readonly PatchItemResourceDepartementPatchPath = '/departements/{id}';

  /**
   * patch-departement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceDepartementPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDepartementPatch$Response(params: PatchItemResourceDepartementPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return patchItemResourceDepartementPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceDepartementPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDepartementPatch(params: PatchItemResourceDepartementPatch$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.patchItemResourceDepartementPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

}
