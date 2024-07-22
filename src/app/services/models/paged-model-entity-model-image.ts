/* tslint:disable */
/* eslint-disable */
import { EntityModelImage } from '../models/entity-model-image';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelImage {
  '_embedded'?: {
'images'?: Array<EntityModelImage>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
