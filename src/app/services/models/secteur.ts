/* tslint:disable */
/* eslint-disable */
import { Emploi } from '../models/emploi';
export interface Secteur {
  date_creation?: string;
  date_modification?: string;
  emplois?: Array<Emploi>;
  id?: number;
  libelle?: string;
}
