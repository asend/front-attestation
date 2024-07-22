/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { SecteurResponse } from '../models/secteur-response';
export interface CollectionModelSecteur {
  '_embedded'?: {
'secteurs'?: Array<SecteurResponse>;
};
  '_links'?: Links;
}
