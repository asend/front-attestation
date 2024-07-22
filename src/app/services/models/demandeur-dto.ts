/* tslint:disable */
/* eslint-disable */
import { Departement } from '../models/departement';
import { EmploiDto } from '../models/emploi-dto';
import { Formation } from '../models/formation';
import { Handicap } from '../models/handicap';
import { Image } from '../models/image';
import { ProcesVerbal } from '../models/proces-verbal';
import { Region } from '../models/region';
import { SecteurDto } from '../models/secteur-dto';
import { Sexe } from '../models/sexe';
import { SituationMatrimoiniale } from '../models/situation-matrimoiniale';
import { Statut } from '../models/statut';
export interface DemandeurDto {
  adresse?: string;
  anne_diplome?: string;
  autre_diplome?: string;
  code?: string;
  date_naissance?: string;
  departement_naissance_id?: Departement;
  departement_residense_id?: Departement;
  emplois?: Array<EmploiDto>;
  etablissement_diplome?: string;
  formation?: Formation;
  handicaps?: Array<Handicap>;
  id?: number;
  images?: Array<Image>;
  intitule_diplome?: string;
  lieu_naissance?: string;
  nombre_enfant?: number;
  proces_verbal?: ProcesVerbal;
  region_naissance_id?: Region;
  region_residense_id?: Region;
  secteurs?: Array<SecteurDto>;
  sexe?: Sexe;
  situation_matrimoiniale?: SituationMatrimoiniale;
  specialite?: string;
  status?: Statut;
  telephone?: string;
  user?: number;
  username?: string;
}
