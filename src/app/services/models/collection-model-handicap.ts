/* tslint:disable */
/* eslint-disable */
import { HandicapResponse } from '../models/handicap-response';
import { Links } from '../models/links';
export interface CollectionModelHandicap {
  '_embedded'?: {
'handicaps'?: Array<HandicapResponse>;
};
  '_links'?: Links;
}
