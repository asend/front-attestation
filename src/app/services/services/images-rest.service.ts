/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceImageDelete } from '../fn/images-rest/delete-item-resource-image-delete';
import { DeleteItemResourceImageDelete$Params } from '../fn/images-rest/delete-item-resource-image-delete';
import { EntityModelImage } from '../models/entity-model-image';
import { getCollectionResourceImageGet1$Json } from '../fn/images-rest/get-collection-resource-image-get-1-json';
import { GetCollectionResourceImageGet1$Json$Params } from '../fn/images-rest/get-collection-resource-image-get-1-json';
import { getCollectionResourceImageGet1$UriList } from '../fn/images-rest/get-collection-resource-image-get-1-uri-list';
import { GetCollectionResourceImageGet1$UriList$Params } from '../fn/images-rest/get-collection-resource-image-get-1-uri-list';
import { getItemResourceImageGet } from '../fn/images-rest/get-item-resource-image-get';
import { GetItemResourceImageGet$Params } from '../fn/images-rest/get-item-resource-image-get';
import { PagedModelEntityModelImage } from '../models/paged-model-entity-model-image';
import { patchItemResourceImagePatch } from '../fn/images-rest/patch-item-resource-image-patch';
import { PatchItemResourceImagePatch$Params } from '../fn/images-rest/patch-item-resource-image-patch';
import { postCollectionResourceImagePost } from '../fn/images-rest/post-collection-resource-image-post';
import { PostCollectionResourceImagePost$Params } from '../fn/images-rest/post-collection-resource-image-post';
import { putItemResourceImagePut } from '../fn/images-rest/put-item-resource-image-put';
import { PutItemResourceImagePut$Params } from '../fn/images-rest/put-item-resource-image-put';

@Injectable({ providedIn: 'root' })
export class ImagesRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceImageGet1()` */
  static readonly GetCollectionResourceImageGet1Path = '/images';

  /**
   * get-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceImageGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceImageGet1$Json$Response(params?: GetCollectionResourceImageGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelImage>> {
    return getCollectionResourceImageGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceImageGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceImageGet1$Json(params?: GetCollectionResourceImageGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelImage> {
    return this.getCollectionResourceImageGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelImage>): PagedModelEntityModelImage => r.body)
    );
  }

  /**
   * get-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceImageGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceImageGet1$UriList$Response(params?: GetCollectionResourceImageGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceImageGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceImageGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceImageGet1$UriList(params?: GetCollectionResourceImageGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceImageGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceImagePost()` */
  static readonly PostCollectionResourceImagePostPath = '/images';

  /**
   * create-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceImagePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceImagePost$Response(params: PostCollectionResourceImagePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
    return postCollectionResourceImagePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceImagePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceImagePost(params: PostCollectionResourceImagePost$Params, context?: HttpContext): Observable<EntityModelImage> {
    return this.postCollectionResourceImagePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelImage>): EntityModelImage => r.body)
    );
  }

  /** Path part for operation `getItemResourceImageGet()` */
  static readonly GetItemResourceImageGetPath = '/images/{id}';

  /**
   * get-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceImageGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceImageGet$Response(params: GetItemResourceImageGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
    return getItemResourceImageGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceImageGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceImageGet(params: GetItemResourceImageGet$Params, context?: HttpContext): Observable<EntityModelImage> {
    return this.getItemResourceImageGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelImage>): EntityModelImage => r.body)
    );
  }

  /** Path part for operation `putItemResourceImagePut()` */
  static readonly PutItemResourceImagePutPath = '/images/{id}';

  /**
   * update-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceImagePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceImagePut$Response(params: PutItemResourceImagePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
    return putItemResourceImagePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceImagePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceImagePut(params: PutItemResourceImagePut$Params, context?: HttpContext): Observable<EntityModelImage> {
    return this.putItemResourceImagePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelImage>): EntityModelImage => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceImageDelete()` */
  static readonly DeleteItemResourceImageDeletePath = '/images/{id}';

  /**
   * delete-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceImageDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceImageDelete$Response(params: DeleteItemResourceImageDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceImageDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceImageDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceImageDelete(params: DeleteItemResourceImageDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceImageDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceImagePatch()` */
  static readonly PatchItemResourceImagePatchPath = '/images/{id}';

  /**
   * patch-image
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceImagePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceImagePatch$Response(params: PatchItemResourceImagePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelImage>> {
    return patchItemResourceImagePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-image
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceImagePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceImagePatch(params: PatchItemResourceImagePatch$Params, context?: HttpContext): Observable<EntityModelImage> {
    return this.patchItemResourceImagePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelImage>): EntityModelImage => r.body)
    );
  }

}
