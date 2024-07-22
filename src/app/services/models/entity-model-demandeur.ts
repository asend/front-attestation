/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelDemandeur {
  '_links'?: Links;
  adresse?: string;
  anne_diplome?: string;
  autre_diplome?: string;
  code?: string;
  date_creation?: string;
  date_modification?: string;
  date_naissance?: string;
  etablissement_diplome?: string;
  intitule_diplome?: string;
  lieu_naissance?: string;
  nombre_enfant?: number;
  specialite?: string;
  telephone?: string;
  user?: number;
  username?: string;
}
