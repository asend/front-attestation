/* tslint:disable */
/* eslint-disable */
import { EntityModelRegion } from '../models/entity-model-region';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelRegion {
  '_embedded'?: {
'regions'?: Array<EntityModelRegion>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
