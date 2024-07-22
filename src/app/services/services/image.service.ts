/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteImage } from '../fn/image/delete-image';
import { DeleteImage$Params } from '../fn/image/delete-image';
import { downloadFiles } from '../fn/image/download-files';
import { DownloadFiles$Params } from '../fn/image/download-files';
import { getImageFs } from '../fn/image/get-image-fs';
import { GetImageFs$Params } from '../fn/image/get-image-fs';
import { getImagesDemandeur } from '../fn/image/get-images-demandeur';
import { GetImagesDemandeur$Params } from '../fn/image/get-images-demandeur';
import { Image } from '../models/image';
import { uploadFiles } from '../fn/image/upload-files';
import { UploadFiles$Params } from '../fn/image/upload-files';
import { uploadImageFs } from '../fn/image/upload-image-fs';
import { UploadImageFs$Params } from '../fn/image/upload-image-fs';
import { uploadMultiImages } from '../fn/image/upload-multi-images';
import { UploadMultiImages$Params } from '../fn/image/upload-multi-images';

@Injectable({ providedIn: 'root' })
export class ImageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadImageFs()` */
  static readonly UploadImageFsPath = '/api/images/uploadFS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImageFs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImageFs$Response(params: UploadImageFs$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return uploadImageFs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadImageFs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImageFs(params: UploadImageFs$Params, context?: HttpContext): Observable<void> {
    return this.uploadImageFs$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `uploadFiles()` */
  static readonly UploadFilesPath = '/api/images/upload/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFiles()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFiles$Response(params: UploadFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return uploadFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFiles$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFiles(params: UploadFiles$Params, context?: HttpContext): Observable<Array<string>> {
    return this.uploadFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `uploadMultiImages()` */
  static readonly UploadMultiImagesPath = '/api/images/image/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadMultiImages()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadMultiImages$Response(params: UploadMultiImages$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
    return uploadMultiImages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadMultiImages$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadMultiImages(params: UploadMultiImages$Params, context?: HttpContext): Observable<Image> {
    return this.uploadMultiImages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Image>): Image => r.body)
    );
  }

  /** Path part for operation `getImageFs()` */
  static readonly GetImageFsPath = '/api/images/loadfromFS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getImageFs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageFs$Response(params: GetImageFs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getImageFs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getImageFs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageFs(params: GetImageFs$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getImageFs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getImagesDemandeur()` */
  static readonly GetImagesDemandeurPath = '/api/images/imagesDemandeur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getImagesDemandeur()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImagesDemandeur$Response(params: GetImagesDemandeur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Image>>> {
    return getImagesDemandeur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getImagesDemandeur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImagesDemandeur(params: GetImagesDemandeur$Params, context?: HttpContext): Observable<Array<Image>> {
    return this.getImagesDemandeur$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Image>>): Array<Image> => r.body)
    );
  }

  /** Path part for operation `downloadFiles()` */
  static readonly DownloadFilesPath = '/api/images/download/{filename}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadFiles$Response(params: DownloadFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return downloadFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downloadFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadFiles(params: DownloadFiles$Params, context?: HttpContext): Observable<Blob> {
    return this.downloadFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `deleteImage()` */
  static readonly DeleteImagePath = '/api/images/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteImage$Response(params: DeleteImage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteImage(params: DeleteImage$Params, context?: HttpContext): Observable<void> {
    return this.deleteImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
