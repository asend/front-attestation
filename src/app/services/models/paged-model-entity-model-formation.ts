/* tslint:disable */
/* eslint-disable */
import { EntityModelFormation } from '../models/entity-model-formation';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelFormation {
  '_embedded'?: {
'formations'?: Array<EntityModelFormation>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
