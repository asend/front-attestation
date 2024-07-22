/* tslint:disable */
/* eslint-disable */
import { EntityModelProcesVerbal } from '../models/entity-model-proces-verbal';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelProcesVerbal {
  '_embedded'?: {
'procesVerbals'?: Array<EntityModelProcesVerbal>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
