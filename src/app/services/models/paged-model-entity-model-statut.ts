/* tslint:disable */
/* eslint-disable */
import { EntityModelStatut } from '../models/entity-model-statut';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelStatut {
  '_embedded'?: {
'statuts'?: Array<EntityModelStatut>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
