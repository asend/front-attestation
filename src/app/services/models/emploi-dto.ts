/* tslint:disable */
/* eslint-disable */
import { SecteurDto } from '../models/secteur-dto';
export interface EmploiDto {
  id?: number;
  idSecteur?: number;
  libelle: string;
  libelleSecteur?: string;
  secteur?: SecteurDto;
}
