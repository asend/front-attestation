/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelDepartement } from '../models/collection-model-departement';
import { createPropertyReferenceRegionPatch$Json } from '../fn/regions-rest/create-property-reference-region-patch-json';
import { CreatePropertyReferenceRegionPatch$Json$Params } from '../fn/regions-rest/create-property-reference-region-patch-json';
import { createPropertyReferenceRegionPatch$UriList } from '../fn/regions-rest/create-property-reference-region-patch-uri-list';
import { CreatePropertyReferenceRegionPatch$UriList$Params } from '../fn/regions-rest/create-property-reference-region-patch-uri-list';
import { createPropertyReferenceRegionPut$Json } from '../fn/regions-rest/create-property-reference-region-put-json';
import { CreatePropertyReferenceRegionPut$Json$Params } from '../fn/regions-rest/create-property-reference-region-put-json';
import { createPropertyReferenceRegionPut$UriList } from '../fn/regions-rest/create-property-reference-region-put-uri-list';
import { CreatePropertyReferenceRegionPut$UriList$Params } from '../fn/regions-rest/create-property-reference-region-put-uri-list';
import { deleteItemResourceRegionDelete } from '../fn/regions-rest/delete-item-resource-region-delete';
import { DeleteItemResourceRegionDelete$Params } from '../fn/regions-rest/delete-item-resource-region-delete';
import { deletePropertyReferenceIdRegionDelete } from '../fn/regions-rest/delete-property-reference-id-region-delete';
import { DeletePropertyReferenceIdRegionDelete$Params } from '../fn/regions-rest/delete-property-reference-id-region-delete';
import { deletePropertyReferenceRegionDelete } from '../fn/regions-rest/delete-property-reference-region-delete';
import { DeletePropertyReferenceRegionDelete$Params } from '../fn/regions-rest/delete-property-reference-region-delete';
import { EntityModelRegion } from '../models/entity-model-region';
import { followPropertyReferenceRegionGet } from '../fn/regions-rest/follow-property-reference-region-get';
import { FollowPropertyReferenceRegionGet$Params } from '../fn/regions-rest/follow-property-reference-region-get';
import { followPropertyReferenceRegionGet1$Json } from '../fn/regions-rest/follow-property-reference-region-get-1-json';
import { FollowPropertyReferenceRegionGet1$Json$Params } from '../fn/regions-rest/follow-property-reference-region-get-1-json';
import { followPropertyReferenceRegionGet1$UriList } from '../fn/regions-rest/follow-property-reference-region-get-1-uri-list';
import { FollowPropertyReferenceRegionGet1$UriList$Params } from '../fn/regions-rest/follow-property-reference-region-get-1-uri-list';
import { getCollectionResourceRegionGet1$Json } from '../fn/regions-rest/get-collection-resource-region-get-1-json';
import { GetCollectionResourceRegionGet1$Json$Params } from '../fn/regions-rest/get-collection-resource-region-get-1-json';
import { getCollectionResourceRegionGet1$UriList } from '../fn/regions-rest/get-collection-resource-region-get-1-uri-list';
import { GetCollectionResourceRegionGet1$UriList$Params } from '../fn/regions-rest/get-collection-resource-region-get-1-uri-list';
import { getItemResourceRegionGet } from '../fn/regions-rest/get-item-resource-region-get';
import { GetItemResourceRegionGet$Params } from '../fn/regions-rest/get-item-resource-region-get';
import { PagedModelEntityModelRegion } from '../models/paged-model-entity-model-region';
import { patchItemResourceRegionPatch } from '../fn/regions-rest/patch-item-resource-region-patch';
import { PatchItemResourceRegionPatch$Params } from '../fn/regions-rest/patch-item-resource-region-patch';
import { postCollectionResourceRegionPost } from '../fn/regions-rest/post-collection-resource-region-post';
import { PostCollectionResourceRegionPost$Params } from '../fn/regions-rest/post-collection-resource-region-post';
import { putItemResourceRegionPut } from '../fn/regions-rest/put-item-resource-region-put';
import { PutItemResourceRegionPut$Params } from '../fn/regions-rest/put-item-resource-region-put';

@Injectable({ providedIn: 'root' })
export class RegionsRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceRegionGet1()` */
  static readonly GetCollectionResourceRegionGet1Path = '/regions';

  /**
   * get-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceRegionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRegionGet1$Json$Response(params?: GetCollectionResourceRegionGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelRegion>> {
    return getCollectionResourceRegionGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceRegionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRegionGet1$Json(params?: GetCollectionResourceRegionGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelRegion> {
    return this.getCollectionResourceRegionGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelRegion>): PagedModelEntityModelRegion => r.body)
    );
  }

  /**
   * get-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceRegionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRegionGet1$UriList$Response(params?: GetCollectionResourceRegionGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceRegionGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceRegionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceRegionGet1$UriList(params?: GetCollectionResourceRegionGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceRegionGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceRegionPost()` */
  static readonly PostCollectionResourceRegionPostPath = '/regions';

  /**
   * create-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceRegionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceRegionPost$Response(params: PostCollectionResourceRegionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return postCollectionResourceRegionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceRegionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceRegionPost(params: PostCollectionResourceRegionPost$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.postCollectionResourceRegionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `getItemResourceRegionGet()` */
  static readonly GetItemResourceRegionGetPath = '/regions/{id}';

  /**
   * get-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceRegionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceRegionGet$Response(params: GetItemResourceRegionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return getItemResourceRegionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceRegionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceRegionGet(params: GetItemResourceRegionGet$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.getItemResourceRegionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `putItemResourceRegionPut()` */
  static readonly PutItemResourceRegionPutPath = '/regions/{id}';

  /**
   * update-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceRegionPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceRegionPut$Response(params: PutItemResourceRegionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return putItemResourceRegionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceRegionPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceRegionPut(params: PutItemResourceRegionPut$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.putItemResourceRegionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceRegionDelete()` */
  static readonly DeleteItemResourceRegionDeletePath = '/regions/{id}';

  /**
   * delete-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceRegionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceRegionDelete$Response(params: DeleteItemResourceRegionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceRegionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceRegionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceRegionDelete(params: DeleteItemResourceRegionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceRegionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceRegionPatch()` */
  static readonly PatchItemResourceRegionPatchPath = '/regions/{id}';

  /**
   * patch-region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceRegionPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceRegionPatch$Response(params: PatchItemResourceRegionPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return patchItemResourceRegionPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceRegionPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceRegionPatch(params: PatchItemResourceRegionPatch$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.patchItemResourceRegionPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceRegionGet1()` */
  static readonly FollowPropertyReferenceRegionGet1Path = '/regions/{id}/departements';

  /**
   * get-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRegionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet1$Json$Response(params: FollowPropertyReferenceRegionGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return followPropertyReferenceRegionGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRegionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet1$Json(params: FollowPropertyReferenceRegionGet1$Json$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.followPropertyReferenceRegionGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /**
   * get-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRegionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet1$UriList$Response(params: FollowPropertyReferenceRegionGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceRegionGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRegionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet1$UriList(params: FollowPropertyReferenceRegionGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceRegionGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceRegionPut()` */
  static readonly CreatePropertyReferenceRegionPutPath = '/regions/{id}/departements';

  /**
   * update-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRegionPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRegionPut$Json$Response(params: CreatePropertyReferenceRegionPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return createPropertyReferenceRegionPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRegionPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRegionPut$Json(params: CreatePropertyReferenceRegionPut$Json$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.createPropertyReferenceRegionPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /**
   * update-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRegionPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRegionPut$UriList$Response(params: CreatePropertyReferenceRegionPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return createPropertyReferenceRegionPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRegionPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRegionPut$UriList(params: CreatePropertyReferenceRegionPut$UriList$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.createPropertyReferenceRegionPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceRegionDelete()` */
  static readonly DeletePropertyReferenceRegionDeletePath = '/regions/{id}/departements';

  /**
   * delete-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceRegionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceRegionDelete$Response(params: DeletePropertyReferenceRegionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceRegionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceRegionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceRegionDelete(params: DeletePropertyReferenceRegionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceRegionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceRegionPatch()` */
  static readonly CreatePropertyReferenceRegionPatchPath = '/regions/{id}/departements';

  /**
   * patch-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRegionPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRegionPatch$Json$Response(params: CreatePropertyReferenceRegionPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return createPropertyReferenceRegionPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRegionPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRegionPatch$Json(params: CreatePropertyReferenceRegionPatch$Json$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.createPropertyReferenceRegionPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /**
   * patch-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRegionPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRegionPatch$UriList$Response(params: CreatePropertyReferenceRegionPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return createPropertyReferenceRegionPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRegionPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRegionPatch$UriList(params: CreatePropertyReferenceRegionPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.createPropertyReferenceRegionPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceRegionGet()` */
  static readonly FollowPropertyReferenceRegionGetPath = '/regions/{id}/departements/{propertyId}';

  /**
   * get-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRegionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet$Response(params: FollowPropertyReferenceRegionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelDepartement>> {
    return followPropertyReferenceRegionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRegionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRegionGet(params: FollowPropertyReferenceRegionGet$Params, context?: HttpContext): Observable<CollectionModelDepartement> {
    return this.followPropertyReferenceRegionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelDepartement>): CollectionModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdRegionDelete()` */
  static readonly DeletePropertyReferenceIdRegionDeletePath = '/regions/{id}/departements/{propertyId}';

  /**
   * delete-departement-by-region-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdRegionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdRegionDelete$Response(params: DeletePropertyReferenceIdRegionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdRegionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-region-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdRegionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdRegionDelete(params: DeletePropertyReferenceIdRegionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdRegionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
