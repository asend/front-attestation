/* tslint:disable */
/* eslint-disable */
import { EntityModelEmploi } from '../models/entity-model-emploi';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelEmploi {
  '_embedded'?: {
'emplois'?: Array<EntityModelEmploi>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
