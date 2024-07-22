/* tslint:disable */
/* eslint-disable */
import { ImageResponse } from '../models/image-response';
import { Links } from '../models/links';
export interface CollectionModelImage {
  '_embedded'?: {
'images'?: Array<ImageResponse>;
};
  '_links'?: Links;
}
