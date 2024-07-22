/* tslint:disable */
/* eslint-disable */
import { EntityModelSexe } from '../models/entity-model-sexe';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelSexe {
  '_embedded'?: {
'sexes'?: Array<EntityModelSexe>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
