/* tslint:disable */
/* eslint-disable */
import { EntityModelDemandeur } from '../models/entity-model-demandeur';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelDemandeur {
  '_embedded'?: {
'demandeurs'?: Array<EntityModelDemandeur>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
