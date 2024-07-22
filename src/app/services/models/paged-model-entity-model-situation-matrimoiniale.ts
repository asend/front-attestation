/* tslint:disable */
/* eslint-disable */
import { EntityModelSituationMatrimoiniale } from '../models/entity-model-situation-matrimoiniale';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelSituationMatrimoiniale {
  '_embedded'?: {
'situationMatrimoiniales'?: Array<EntityModelSituationMatrimoiniale>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
