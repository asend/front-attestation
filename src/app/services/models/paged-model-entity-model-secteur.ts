/* tslint:disable */
/* eslint-disable */
import { EntityModelSecteur } from '../models/entity-model-secteur';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelSecteur {
  '_embedded'?: {
'secteurs'?: Array<EntityModelSecteur>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
