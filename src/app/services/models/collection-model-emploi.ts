/* tslint:disable */
/* eslint-disable */
import { EmploiResponse } from '../models/emploi-response';
import { Links } from '../models/links';
export interface CollectionModelEmploi {
  '_embedded'?: {
'emplois'?: Array<EmploiResponse>;
};
  '_links'?: Links;
}
