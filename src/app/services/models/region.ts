/* tslint:disable */
/* eslint-disable */
import { Departement } from '../models/departement';
export interface Region {
  date_creation?: string;
  date_modification?: string;
  departements?: Array<Departement>;
  id?: number;
  nom?: string;
}
