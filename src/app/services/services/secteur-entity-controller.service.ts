/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceSecteurDelete } from '../fn/secteur-entity-controller/delete-item-resource-secteur-delete';
import { DeleteItemResourceSecteurDelete$Params } from '../fn/secteur-entity-controller/delete-item-resource-secteur-delete';
import { EntityModelSecteur } from '../models/entity-model-secteur';
import { getCollectionResourceSecteurGet1$Json } from '../fn/secteur-entity-controller/get-collection-resource-secteur-get-1-json';
import { GetCollectionResourceSecteurGet1$Json$Params } from '../fn/secteur-entity-controller/get-collection-resource-secteur-get-1-json';
import { getCollectionResourceSecteurGet1$UriList } from '../fn/secteur-entity-controller/get-collection-resource-secteur-get-1-uri-list';
import { GetCollectionResourceSecteurGet1$UriList$Params } from '../fn/secteur-entity-controller/get-collection-resource-secteur-get-1-uri-list';
import { getItemResourceSecteurGet } from '../fn/secteur-entity-controller/get-item-resource-secteur-get';
import { GetItemResourceSecteurGet$Params } from '../fn/secteur-entity-controller/get-item-resource-secteur-get';
import { PagedModelEntityModelSecteur } from '../models/paged-model-entity-model-secteur';
import { patchItemResourceSecteurPatch } from '../fn/secteur-entity-controller/patch-item-resource-secteur-patch';
import { PatchItemResourceSecteurPatch$Params } from '../fn/secteur-entity-controller/patch-item-resource-secteur-patch';
import { postCollectionResourceSecteurPost } from '../fn/secteur-entity-controller/post-collection-resource-secteur-post';
import { PostCollectionResourceSecteurPost$Params } from '../fn/secteur-entity-controller/post-collection-resource-secteur-post';
import { putItemResourceSecteurPut } from '../fn/secteur-entity-controller/put-item-resource-secteur-put';
import { PutItemResourceSecteurPut$Params } from '../fn/secteur-entity-controller/put-item-resource-secteur-put';

@Injectable({ providedIn: 'root' })
export class SecteurEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceSecteurGet1()` */
  static readonly GetCollectionResourceSecteurGet1Path = '/secteurs';

  /**
   * get-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSecteurGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSecteurGet1$Json$Response(params?: GetCollectionResourceSecteurGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelSecteur>> {
    return getCollectionResourceSecteurGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSecteurGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSecteurGet1$Json(params?: GetCollectionResourceSecteurGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelSecteur> {
    return this.getCollectionResourceSecteurGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelSecteur>): PagedModelEntityModelSecteur => r.body)
    );
  }

  /**
   * get-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceSecteurGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSecteurGet1$UriList$Response(params?: GetCollectionResourceSecteurGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceSecteurGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceSecteurGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceSecteurGet1$UriList(params?: GetCollectionResourceSecteurGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceSecteurGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceSecteurPost()` */
  static readonly PostCollectionResourceSecteurPostPath = '/secteurs';

  /**
   * create-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceSecteurPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSecteurPost$Response(params: PostCollectionResourceSecteurPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
    return postCollectionResourceSecteurPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceSecteurPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceSecteurPost(params: PostCollectionResourceSecteurPost$Params, context?: HttpContext): Observable<EntityModelSecteur> {
    return this.postCollectionResourceSecteurPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSecteur>): EntityModelSecteur => r.body)
    );
  }

  /** Path part for operation `getItemResourceSecteurGet()` */
  static readonly GetItemResourceSecteurGetPath = '/secteurs/{id}';

  /**
   * get-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceSecteurGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSecteurGet$Response(params: GetItemResourceSecteurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
    return getItemResourceSecteurGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceSecteurGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceSecteurGet(params: GetItemResourceSecteurGet$Params, context?: HttpContext): Observable<EntityModelSecteur> {
    return this.getItemResourceSecteurGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSecteur>): EntityModelSecteur => r.body)
    );
  }

  /** Path part for operation `putItemResourceSecteurPut()` */
  static readonly PutItemResourceSecteurPutPath = '/secteurs/{id}';

  /**
   * update-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceSecteurPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSecteurPut$Response(params: PutItemResourceSecteurPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
    return putItemResourceSecteurPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceSecteurPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceSecteurPut(params: PutItemResourceSecteurPut$Params, context?: HttpContext): Observable<EntityModelSecteur> {
    return this.putItemResourceSecteurPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSecteur>): EntityModelSecteur => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceSecteurDelete()` */
  static readonly DeleteItemResourceSecteurDeletePath = '/secteurs/{id}';

  /**
   * delete-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceSecteurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSecteurDelete$Response(params: DeleteItemResourceSecteurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceSecteurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceSecteurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceSecteurDelete(params: DeleteItemResourceSecteurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceSecteurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceSecteurPatch()` */
  static readonly PatchItemResourceSecteurPatchPath = '/secteurs/{id}';

  /**
   * patch-secteur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceSecteurPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSecteurPatch$Response(params: PatchItemResourceSecteurPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSecteur>> {
    return patchItemResourceSecteurPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-secteur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceSecteurPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceSecteurPatch(params: PatchItemResourceSecteurPatch$Params, context?: HttpContext): Observable<EntityModelSecteur> {
    return this.patchItemResourceSecteurPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSecteur>): EntityModelSecteur => r.body)
    );
  }

}
