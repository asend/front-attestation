/* tslint:disable */
/* eslint-disable */
import { DepartementResponse } from '../models/departement-response';
import { Links } from '../models/links';
export interface CollectionModelDepartement {
  '_embedded'?: {
'departements'?: Array<DepartementResponse>;
};
  '_links'?: Links;
}
