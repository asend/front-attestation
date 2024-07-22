/* tslint:disable */
/* eslint-disable */
import { EntityModelDepartement } from '../models/entity-model-departement';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelDepartement {
  '_embedded'?: {
'departements'?: Array<EntityModelDepartement>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
