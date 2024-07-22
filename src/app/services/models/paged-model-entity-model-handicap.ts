/* tslint:disable */
/* eslint-disable */
import { EntityModelHandicap } from '../models/entity-model-handicap';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelHandicap {
  '_embedded'?: {
'handicaps'?: Array<EntityModelHandicap>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
