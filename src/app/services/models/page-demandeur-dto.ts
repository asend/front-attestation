/* tslint:disable */
/* eslint-disable */
import { DemandeurDto } from '../models/demandeur-dto';
import { PageableObject } from '../models/pageable-object';
import { SortObject } from '../models/sort-object';
export interface PageDemandeurDto {
  content?: Array<DemandeurDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
