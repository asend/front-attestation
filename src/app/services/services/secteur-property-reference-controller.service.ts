/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEmploi } from '../models/collection-model-emploi';
import { createPropertyReferenceSecteurPatch$Json } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-patch-json';
import { CreatePropertyReferenceSecteurPatch$Json$Params } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-patch-json';
import { createPropertyReferenceSecteurPatch$UriList } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-patch-uri-list';
import { CreatePropertyReferenceSecteurPatch$UriList$Params } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-patch-uri-list';
import { createPropertyReferenceSecteurPut$Json } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-put-json';
import { CreatePropertyReferenceSecteurPut$Json$Params } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-put-json';
import { createPropertyReferenceSecteurPut$UriList } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-put-uri-list';
import { CreatePropertyReferenceSecteurPut$UriList$Params } from '../fn/secteur-property-reference-controller/create-property-reference-secteur-put-uri-list';
import { deletePropertyReferenceIdSecteurDelete } from '../fn/secteur-property-reference-controller/delete-property-reference-id-secteur-delete';
import { DeletePropertyReferenceIdSecteurDelete$Params } from '../fn/secteur-property-reference-controller/delete-property-reference-id-secteur-delete';
import { deletePropertyReferenceSecteurDelete } from '../fn/secteur-property-reference-controller/delete-property-reference-secteur-delete';
import { DeletePropertyReferenceSecteurDelete$Params } from '../fn/secteur-property-reference-controller/delete-property-reference-secteur-delete';
import { followPropertyReferenceSecteurGet } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get';
import { FollowPropertyReferenceSecteurGet$Params } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get';
import { followPropertyReferenceSecteurGet1$Json } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get-1-json';
import { FollowPropertyReferenceSecteurGet1$Json$Params } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get-1-json';
import { followPropertyReferenceSecteurGet1$UriList } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get-1-uri-list';
import { FollowPropertyReferenceSecteurGet1$UriList$Params } from '../fn/secteur-property-reference-controller/follow-property-reference-secteur-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class SecteurPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceSecteurGet1()` */
  static readonly FollowPropertyReferenceSecteurGet1Path = '/secteurs/{id}/emplois';

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceSecteurGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet1$Json$Response(params: FollowPropertyReferenceSecteurGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return followPropertyReferenceSecteurGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceSecteurGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet1$Json(params: FollowPropertyReferenceSecteurGet1$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.followPropertyReferenceSecteurGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceSecteurGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet1$UriList$Response(params: FollowPropertyReferenceSecteurGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceSecteurGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceSecteurGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet1$UriList(params: FollowPropertyReferenceSecteurGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceSecteurGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceSecteurPut()` */
  static readonly CreatePropertyReferenceSecteurPutPath = '/secteurs/{id}/emplois';

  /**
   * update-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceSecteurPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceSecteurPut$Json$Response(params: CreatePropertyReferenceSecteurPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceSecteurPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceSecteurPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceSecteurPut$Json(params: CreatePropertyReferenceSecteurPut$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceSecteurPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * update-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceSecteurPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceSecteurPut$UriList$Response(params: CreatePropertyReferenceSecteurPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceSecteurPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceSecteurPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceSecteurPut$UriList(params: CreatePropertyReferenceSecteurPut$UriList$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceSecteurPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceSecteurDelete()` */
  static readonly DeletePropertyReferenceSecteurDeletePath = '/secteurs/{id}/emplois';

  /**
   * delete-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceSecteurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceSecteurDelete$Response(params: DeletePropertyReferenceSecteurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceSecteurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceSecteurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceSecteurDelete(params: DeletePropertyReferenceSecteurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceSecteurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceSecteurPatch()` */
  static readonly CreatePropertyReferenceSecteurPatchPath = '/secteurs/{id}/emplois';

  /**
   * patch-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceSecteurPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceSecteurPatch$Json$Response(params: CreatePropertyReferenceSecteurPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceSecteurPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceSecteurPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceSecteurPatch$Json(params: CreatePropertyReferenceSecteurPatch$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceSecteurPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * patch-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceSecteurPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceSecteurPatch$UriList$Response(params: CreatePropertyReferenceSecteurPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceSecteurPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceSecteurPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceSecteurPatch$UriList(params: CreatePropertyReferenceSecteurPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceSecteurPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceSecteurGet()` */
  static readonly FollowPropertyReferenceSecteurGetPath = '/secteurs/{id}/emplois/{propertyId}';

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceSecteurGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet$Response(params: FollowPropertyReferenceSecteurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return followPropertyReferenceSecteurGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceSecteurGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceSecteurGet(params: FollowPropertyReferenceSecteurGet$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.followPropertyReferenceSecteurGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdSecteurDelete()` */
  static readonly DeletePropertyReferenceIdSecteurDeletePath = '/secteurs/{id}/emplois/{propertyId}';

  /**
   * delete-emploi-by-secteur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdSecteurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdSecteurDelete$Response(params: DeletePropertyReferenceIdSecteurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdSecteurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-emploi-by-secteur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdSecteurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdSecteurDelete(params: DeletePropertyReferenceIdSecteurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdSecteurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
