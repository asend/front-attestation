/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEmploi } from '../models/collection-model-emploi';
import { CollectionModelHandicap } from '../models/collection-model-handicap';
import { CollectionModelImage } from '../models/collection-model-image';
import { CollectionModelSecteur } from '../models/collection-model-secteur';
import { createPropertyReferenceDemandeurPatch$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-json';
import { CreatePropertyReferenceDemandeurPatch$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-json';
import { createPropertyReferenceDemandeurPatch$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-uri-list';
import { CreatePropertyReferenceDemandeurPatch$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-uri-list';
import { createPropertyReferenceDemandeurPatch1$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-1-json';
import { CreatePropertyReferenceDemandeurPatch1$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-1-json';
import { createPropertyReferenceDemandeurPatch1$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-1-uri-list';
import { CreatePropertyReferenceDemandeurPatch1$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-1-uri-list';
import { createPropertyReferenceDemandeurPatch10$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-10-json';
import { CreatePropertyReferenceDemandeurPatch10$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-10-json';
import { createPropertyReferenceDemandeurPatch10$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-10-uri-list';
import { CreatePropertyReferenceDemandeurPatch10$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-10-uri-list';
import { createPropertyReferenceDemandeurPatch11$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-11-json';
import { CreatePropertyReferenceDemandeurPatch11$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-11-json';
import { createPropertyReferenceDemandeurPatch11$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-11-uri-list';
import { CreatePropertyReferenceDemandeurPatch11$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-11-uri-list';
import { createPropertyReferenceDemandeurPatch12$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-12-json';
import { CreatePropertyReferenceDemandeurPatch12$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-12-json';
import { createPropertyReferenceDemandeurPatch12$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-12-uri-list';
import { CreatePropertyReferenceDemandeurPatch12$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-12-uri-list';
import { createPropertyReferenceDemandeurPatch2$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-2-json';
import { CreatePropertyReferenceDemandeurPatch2$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-2-json';
import { createPropertyReferenceDemandeurPatch2$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-2-uri-list';
import { CreatePropertyReferenceDemandeurPatch2$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-2-uri-list';
import { createPropertyReferenceDemandeurPatch3$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-3-json';
import { CreatePropertyReferenceDemandeurPatch3$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-3-json';
import { createPropertyReferenceDemandeurPatch3$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-3-uri-list';
import { CreatePropertyReferenceDemandeurPatch3$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-3-uri-list';
import { createPropertyReferenceDemandeurPatch4$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-4-json';
import { CreatePropertyReferenceDemandeurPatch4$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-4-json';
import { createPropertyReferenceDemandeurPatch4$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-4-uri-list';
import { CreatePropertyReferenceDemandeurPatch4$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-4-uri-list';
import { createPropertyReferenceDemandeurPatch5$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-5-json';
import { CreatePropertyReferenceDemandeurPatch5$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-5-json';
import { createPropertyReferenceDemandeurPatch5$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-5-uri-list';
import { CreatePropertyReferenceDemandeurPatch5$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-5-uri-list';
import { createPropertyReferenceDemandeurPatch6$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-6-json';
import { CreatePropertyReferenceDemandeurPatch6$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-6-json';
import { createPropertyReferenceDemandeurPatch6$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-6-uri-list';
import { CreatePropertyReferenceDemandeurPatch6$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-6-uri-list';
import { createPropertyReferenceDemandeurPatch7$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-7-json';
import { CreatePropertyReferenceDemandeurPatch7$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-7-json';
import { createPropertyReferenceDemandeurPatch7$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-7-uri-list';
import { CreatePropertyReferenceDemandeurPatch7$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-7-uri-list';
import { createPropertyReferenceDemandeurPatch8$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-8-json';
import { CreatePropertyReferenceDemandeurPatch8$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-8-json';
import { createPropertyReferenceDemandeurPatch8$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-8-uri-list';
import { CreatePropertyReferenceDemandeurPatch8$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-8-uri-list';
import { createPropertyReferenceDemandeurPatch9$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-9-json';
import { CreatePropertyReferenceDemandeurPatch9$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-9-json';
import { createPropertyReferenceDemandeurPatch9$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-9-uri-list';
import { CreatePropertyReferenceDemandeurPatch9$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-patch-9-uri-list';
import { createPropertyReferenceDemandeurPut$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-json';
import { CreatePropertyReferenceDemandeurPut$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-json';
import { createPropertyReferenceDemandeurPut$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-uri-list';
import { CreatePropertyReferenceDemandeurPut$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-uri-list';
import { createPropertyReferenceDemandeurPut1$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-1-json';
import { CreatePropertyReferenceDemandeurPut1$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-1-json';
import { createPropertyReferenceDemandeurPut1$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-1-uri-list';
import { CreatePropertyReferenceDemandeurPut1$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-1-uri-list';
import { createPropertyReferenceDemandeurPut10$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-10-json';
import { CreatePropertyReferenceDemandeurPut10$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-10-json';
import { createPropertyReferenceDemandeurPut10$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-10-uri-list';
import { CreatePropertyReferenceDemandeurPut10$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-10-uri-list';
import { createPropertyReferenceDemandeurPut11$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-11-json';
import { CreatePropertyReferenceDemandeurPut11$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-11-json';
import { createPropertyReferenceDemandeurPut11$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-11-uri-list';
import { CreatePropertyReferenceDemandeurPut11$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-11-uri-list';
import { createPropertyReferenceDemandeurPut12$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-12-json';
import { CreatePropertyReferenceDemandeurPut12$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-12-json';
import { createPropertyReferenceDemandeurPut12$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-12-uri-list';
import { CreatePropertyReferenceDemandeurPut12$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-12-uri-list';
import { createPropertyReferenceDemandeurPut2$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-2-json';
import { CreatePropertyReferenceDemandeurPut2$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-2-json';
import { createPropertyReferenceDemandeurPut2$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-2-uri-list';
import { CreatePropertyReferenceDemandeurPut2$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-2-uri-list';
import { createPropertyReferenceDemandeurPut3$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-3-json';
import { CreatePropertyReferenceDemandeurPut3$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-3-json';
import { createPropertyReferenceDemandeurPut3$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-3-uri-list';
import { CreatePropertyReferenceDemandeurPut3$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-3-uri-list';
import { createPropertyReferenceDemandeurPut4$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-4-json';
import { CreatePropertyReferenceDemandeurPut4$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-4-json';
import { createPropertyReferenceDemandeurPut4$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-4-uri-list';
import { CreatePropertyReferenceDemandeurPut4$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-4-uri-list';
import { createPropertyReferenceDemandeurPut5$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-5-json';
import { CreatePropertyReferenceDemandeurPut5$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-5-json';
import { createPropertyReferenceDemandeurPut5$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-5-uri-list';
import { CreatePropertyReferenceDemandeurPut5$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-5-uri-list';
import { createPropertyReferenceDemandeurPut6$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-6-json';
import { CreatePropertyReferenceDemandeurPut6$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-6-json';
import { createPropertyReferenceDemandeurPut6$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-6-uri-list';
import { CreatePropertyReferenceDemandeurPut6$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-6-uri-list';
import { createPropertyReferenceDemandeurPut7$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-7-json';
import { CreatePropertyReferenceDemandeurPut7$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-7-json';
import { createPropertyReferenceDemandeurPut7$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-7-uri-list';
import { CreatePropertyReferenceDemandeurPut7$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-7-uri-list';
import { createPropertyReferenceDemandeurPut8$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-8-json';
import { CreatePropertyReferenceDemandeurPut8$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-8-json';
import { createPropertyReferenceDemandeurPut8$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-8-uri-list';
import { CreatePropertyReferenceDemandeurPut8$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-8-uri-list';
import { createPropertyReferenceDemandeurPut9$Json } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-9-json';
import { CreatePropertyReferenceDemandeurPut9$Json$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-9-json';
import { createPropertyReferenceDemandeurPut9$UriList } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-9-uri-list';
import { CreatePropertyReferenceDemandeurPut9$UriList$Params } from '../fn/demandeurs-rest/create-property-reference-demandeur-put-9-uri-list';
import { deleteItemResourceDemandeurDelete } from '../fn/demandeurs-rest/delete-item-resource-demandeur-delete';
import { DeleteItemResourceDemandeurDelete$Params } from '../fn/demandeurs-rest/delete-item-resource-demandeur-delete';
import { deletePropertyReferenceDemandeurDelete } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete';
import { DeletePropertyReferenceDemandeurDelete$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete';
import { deletePropertyReferenceDemandeurDelete1 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-1';
import { DeletePropertyReferenceDemandeurDelete1$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-1';
import { deletePropertyReferenceDemandeurDelete10 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-10';
import { DeletePropertyReferenceDemandeurDelete10$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-10';
import { deletePropertyReferenceDemandeurDelete11 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-11';
import { DeletePropertyReferenceDemandeurDelete11$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-11';
import { deletePropertyReferenceDemandeurDelete12 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-12';
import { DeletePropertyReferenceDemandeurDelete12$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-12';
import { deletePropertyReferenceDemandeurDelete2 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-2';
import { DeletePropertyReferenceDemandeurDelete2$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-2';
import { deletePropertyReferenceDemandeurDelete3 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-3';
import { DeletePropertyReferenceDemandeurDelete3$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-3';
import { deletePropertyReferenceDemandeurDelete4 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-4';
import { DeletePropertyReferenceDemandeurDelete4$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-4';
import { deletePropertyReferenceDemandeurDelete5 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-5';
import { DeletePropertyReferenceDemandeurDelete5$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-5';
import { deletePropertyReferenceDemandeurDelete6 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-6';
import { DeletePropertyReferenceDemandeurDelete6$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-6';
import { deletePropertyReferenceDemandeurDelete7 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-7';
import { DeletePropertyReferenceDemandeurDelete7$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-7';
import { deletePropertyReferenceDemandeurDelete8 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-8';
import { DeletePropertyReferenceDemandeurDelete8$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-8';
import { deletePropertyReferenceDemandeurDelete9 } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-9';
import { DeletePropertyReferenceDemandeurDelete9$Params } from '../fn/demandeurs-rest/delete-property-reference-demandeur-delete-9';
import { deletePropertyReferenceIdDemandeurDelete } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete';
import { DeletePropertyReferenceIdDemandeurDelete$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete';
import { deletePropertyReferenceIdDemandeurDelete1 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-1';
import { DeletePropertyReferenceIdDemandeurDelete1$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-1';
import { deletePropertyReferenceIdDemandeurDelete10 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-10';
import { DeletePropertyReferenceIdDemandeurDelete10$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-10';
import { deletePropertyReferenceIdDemandeurDelete11 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-11';
import { DeletePropertyReferenceIdDemandeurDelete11$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-11';
import { deletePropertyReferenceIdDemandeurDelete12 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-12';
import { DeletePropertyReferenceIdDemandeurDelete12$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-12';
import { deletePropertyReferenceIdDemandeurDelete2 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-2';
import { DeletePropertyReferenceIdDemandeurDelete2$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-2';
import { deletePropertyReferenceIdDemandeurDelete3 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-3';
import { DeletePropertyReferenceIdDemandeurDelete3$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-3';
import { deletePropertyReferenceIdDemandeurDelete4 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-4';
import { DeletePropertyReferenceIdDemandeurDelete4$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-4';
import { deletePropertyReferenceIdDemandeurDelete5 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-5';
import { DeletePropertyReferenceIdDemandeurDelete5$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-5';
import { deletePropertyReferenceIdDemandeurDelete6 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-6';
import { DeletePropertyReferenceIdDemandeurDelete6$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-6';
import { deletePropertyReferenceIdDemandeurDelete7 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-7';
import { DeletePropertyReferenceIdDemandeurDelete7$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-7';
import { deletePropertyReferenceIdDemandeurDelete8 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-8';
import { DeletePropertyReferenceIdDemandeurDelete8$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-8';
import { deletePropertyReferenceIdDemandeurDelete9 } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-9';
import { DeletePropertyReferenceIdDemandeurDelete9$Params } from '../fn/demandeurs-rest/delete-property-reference-id-demandeur-delete-9';
import { EntityModelDemandeur } from '../models/entity-model-demandeur';
import { EntityModelDepartement } from '../models/entity-model-departement';
import { EntityModelFormation } from '../models/entity-model-formation';
import { EntityModelProcesVerbal } from '../models/entity-model-proces-verbal';
import { EntityModelRegion } from '../models/entity-model-region';
import { EntityModelSexe } from '../models/entity-model-sexe';
import { EntityModelSituationMatrimoiniale } from '../models/entity-model-situation-matrimoiniale';
import { EntityModelStatut } from '../models/entity-model-statut';
import { executeSearchDemandeurGet } from '../fn/demandeurs-rest/execute-search-demandeur-get';
import { ExecuteSearchDemandeurGet$Params } from '../fn/demandeurs-rest/execute-search-demandeur-get';
import { executeSearchDemandeurGet1 } from '../fn/demandeurs-rest/execute-search-demandeur-get-1';
import { ExecuteSearchDemandeurGet1$Params } from '../fn/demandeurs-rest/execute-search-demandeur-get-1';
import { followPropertyReferenceDemandeurGet } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get';
import { FollowPropertyReferenceDemandeurGet$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get';
import { followPropertyReferenceDemandeurGet1$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-1-json';
import { FollowPropertyReferenceDemandeurGet1$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-1-json';
import { followPropertyReferenceDemandeurGet1$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-1-uri-list';
import { FollowPropertyReferenceDemandeurGet1$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-1-uri-list';
import { followPropertyReferenceDemandeurGet10 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-10';
import { FollowPropertyReferenceDemandeurGet10$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-10';
import { followPropertyReferenceDemandeurGet101$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-101-json';
import { FollowPropertyReferenceDemandeurGet101$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-101-json';
import { followPropertyReferenceDemandeurGet101$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-101-uri-list';
import { FollowPropertyReferenceDemandeurGet101$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-101-uri-list';
import { followPropertyReferenceDemandeurGet11 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-11';
import { FollowPropertyReferenceDemandeurGet11$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-11';
import { followPropertyReferenceDemandeurGet111$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-111-json';
import { FollowPropertyReferenceDemandeurGet111$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-111-json';
import { followPropertyReferenceDemandeurGet111$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-111-uri-list';
import { FollowPropertyReferenceDemandeurGet111$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-111-uri-list';
import { followPropertyReferenceDemandeurGet12 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-12';
import { FollowPropertyReferenceDemandeurGet12$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-12';
import { followPropertyReferenceDemandeurGet121$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-121-json';
import { FollowPropertyReferenceDemandeurGet121$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-121-json';
import { followPropertyReferenceDemandeurGet121$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-121-uri-list';
import { FollowPropertyReferenceDemandeurGet121$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-121-uri-list';
import { followPropertyReferenceDemandeurGet13 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-13';
import { FollowPropertyReferenceDemandeurGet13$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-13';
import { followPropertyReferenceDemandeurGet131$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-131-json';
import { FollowPropertyReferenceDemandeurGet131$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-131-json';
import { followPropertyReferenceDemandeurGet131$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-131-uri-list';
import { FollowPropertyReferenceDemandeurGet131$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-131-uri-list';
import { followPropertyReferenceDemandeurGet2 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-2';
import { FollowPropertyReferenceDemandeurGet2$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-2';
import { followPropertyReferenceDemandeurGet21$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-21-json';
import { FollowPropertyReferenceDemandeurGet21$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-21-json';
import { followPropertyReferenceDemandeurGet21$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-21-uri-list';
import { FollowPropertyReferenceDemandeurGet21$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-21-uri-list';
import { followPropertyReferenceDemandeurGet3 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-3';
import { FollowPropertyReferenceDemandeurGet3$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-3';
import { followPropertyReferenceDemandeurGet31$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-31-json';
import { FollowPropertyReferenceDemandeurGet31$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-31-json';
import { followPropertyReferenceDemandeurGet31$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-31-uri-list';
import { FollowPropertyReferenceDemandeurGet31$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-31-uri-list';
import { followPropertyReferenceDemandeurGet4 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-4';
import { FollowPropertyReferenceDemandeurGet4$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-4';
import { followPropertyReferenceDemandeurGet41$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-41-json';
import { FollowPropertyReferenceDemandeurGet41$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-41-json';
import { followPropertyReferenceDemandeurGet41$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-41-uri-list';
import { FollowPropertyReferenceDemandeurGet41$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-41-uri-list';
import { followPropertyReferenceDemandeurGet5 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-5';
import { FollowPropertyReferenceDemandeurGet5$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-5';
import { followPropertyReferenceDemandeurGet51$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-51-json';
import { FollowPropertyReferenceDemandeurGet51$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-51-json';
import { followPropertyReferenceDemandeurGet51$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-51-uri-list';
import { FollowPropertyReferenceDemandeurGet51$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-51-uri-list';
import { followPropertyReferenceDemandeurGet6 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-6';
import { FollowPropertyReferenceDemandeurGet6$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-6';
import { followPropertyReferenceDemandeurGet61$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-61-json';
import { FollowPropertyReferenceDemandeurGet61$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-61-json';
import { followPropertyReferenceDemandeurGet61$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-61-uri-list';
import { FollowPropertyReferenceDemandeurGet61$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-61-uri-list';
import { followPropertyReferenceDemandeurGet7 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-7';
import { FollowPropertyReferenceDemandeurGet7$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-7';
import { followPropertyReferenceDemandeurGet71$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-71-json';
import { FollowPropertyReferenceDemandeurGet71$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-71-json';
import { followPropertyReferenceDemandeurGet71$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-71-uri-list';
import { FollowPropertyReferenceDemandeurGet71$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-71-uri-list';
import { followPropertyReferenceDemandeurGet8 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-8';
import { FollowPropertyReferenceDemandeurGet8$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-8';
import { followPropertyReferenceDemandeurGet81$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-81-json';
import { FollowPropertyReferenceDemandeurGet81$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-81-json';
import { followPropertyReferenceDemandeurGet81$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-81-uri-list';
import { FollowPropertyReferenceDemandeurGet81$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-81-uri-list';
import { followPropertyReferenceDemandeurGet9 } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-9';
import { FollowPropertyReferenceDemandeurGet9$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-9';
import { followPropertyReferenceDemandeurGet91$Json } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-91-json';
import { FollowPropertyReferenceDemandeurGet91$Json$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-91-json';
import { followPropertyReferenceDemandeurGet91$UriList } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-91-uri-list';
import { FollowPropertyReferenceDemandeurGet91$UriList$Params } from '../fn/demandeurs-rest/follow-property-reference-demandeur-get-91-uri-list';
import { getCollectionResourceDemandeurGet1$Json } from '../fn/demandeurs-rest/get-collection-resource-demandeur-get-1-json';
import { GetCollectionResourceDemandeurGet1$Json$Params } from '../fn/demandeurs-rest/get-collection-resource-demandeur-get-1-json';
import { getCollectionResourceDemandeurGet1$UriList } from '../fn/demandeurs-rest/get-collection-resource-demandeur-get-1-uri-list';
import { GetCollectionResourceDemandeurGet1$UriList$Params } from '../fn/demandeurs-rest/get-collection-resource-demandeur-get-1-uri-list';
import { getItemResourceDemandeurGet } from '../fn/demandeurs-rest/get-item-resource-demandeur-get';
import { GetItemResourceDemandeurGet$Params } from '../fn/demandeurs-rest/get-item-resource-demandeur-get';
import { PagedModelEntityModelDemandeur } from '../models/paged-model-entity-model-demandeur';
import { patchItemResourceDemandeurPatch } from '../fn/demandeurs-rest/patch-item-resource-demandeur-patch';
import { PatchItemResourceDemandeurPatch$Params } from '../fn/demandeurs-rest/patch-item-resource-demandeur-patch';
import { postCollectionResourceDemandeurPost } from '../fn/demandeurs-rest/post-collection-resource-demandeur-post';
import { PostCollectionResourceDemandeurPost$Params } from '../fn/demandeurs-rest/post-collection-resource-demandeur-post';
import { putItemResourceDemandeurPut } from '../fn/demandeurs-rest/put-item-resource-demandeur-put';
import { PutItemResourceDemandeurPut$Params } from '../fn/demandeurs-rest/put-item-resource-demandeur-put';

@Injectable({ providedIn: 'root' })
export class DemandeursRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceDemandeurGet1()` */
  static readonly GetCollectionResourceDemandeurGet1Path = '/demandeurs';

  /**
   * get-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDemandeurGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDemandeurGet1$Json$Response(params?: GetCollectionResourceDemandeurGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelDemandeur>> {
    return getCollectionResourceDemandeurGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDemandeurGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDemandeurGet1$Json(params?: GetCollectionResourceDemandeurGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelDemandeur> {
    return this.getCollectionResourceDemandeurGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelDemandeur>): PagedModelEntityModelDemandeur => r.body)
    );
  }

  /**
   * get-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDemandeurGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDemandeurGet1$UriList$Response(params?: GetCollectionResourceDemandeurGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceDemandeurGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDemandeurGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDemandeurGet1$UriList(params?: GetCollectionResourceDemandeurGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceDemandeurGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceDemandeurPost()` */
  static readonly PostCollectionResourceDemandeurPostPath = '/demandeurs';

  /**
   * create-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceDemandeurPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDemandeurPost$Response(params: PostCollectionResourceDemandeurPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return postCollectionResourceDemandeurPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceDemandeurPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDemandeurPost(params: PostCollectionResourceDemandeurPost$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.postCollectionResourceDemandeurPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `executeSearchDemandeurGet()` */
  static readonly ExecuteSearchDemandeurGetPath = '/demandeurs/search/findDemandeurByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchDemandeurGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDemandeurGet$Response(params?: ExecuteSearchDemandeurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return executeSearchDemandeurGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchDemandeurGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDemandeurGet(params?: ExecuteSearchDemandeurGet$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.executeSearchDemandeurGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `executeSearchDemandeurGet1()` */
  static readonly ExecuteSearchDemandeurGet1Path = '/demandeurs/search/findDemandeurByUsername';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchDemandeurGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDemandeurGet1$Response(params?: ExecuteSearchDemandeurGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return executeSearchDemandeurGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchDemandeurGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDemandeurGet1(params?: ExecuteSearchDemandeurGet1$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.executeSearchDemandeurGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `getItemResourceDemandeurGet()` */
  static readonly GetItemResourceDemandeurGetPath = '/demandeurs/{id}';

  /**
   * get-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceDemandeurGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDemandeurGet$Response(params: GetItemResourceDemandeurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return getItemResourceDemandeurGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceDemandeurGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDemandeurGet(params: GetItemResourceDemandeurGet$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.getItemResourceDemandeurGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `putItemResourceDemandeurPut()` */
  static readonly PutItemResourceDemandeurPutPath = '/demandeurs/{id}';

  /**
   * update-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceDemandeurPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDemandeurPut$Response(params: PutItemResourceDemandeurPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return putItemResourceDemandeurPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceDemandeurPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDemandeurPut(params: PutItemResourceDemandeurPut$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.putItemResourceDemandeurPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceDemandeurDelete()` */
  static readonly DeleteItemResourceDemandeurDeletePath = '/demandeurs/{id}';

  /**
   * delete-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceDemandeurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDemandeurDelete$Response(params: DeleteItemResourceDemandeurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceDemandeurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceDemandeurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDemandeurDelete(params: DeleteItemResourceDemandeurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceDemandeurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceDemandeurPatch()` */
  static readonly PatchItemResourceDemandeurPatchPath = '/demandeurs/{id}';

  /**
   * patch-demandeur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceDemandeurPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDemandeurPatch$Response(params: PatchItemResourceDemandeurPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDemandeur>> {
    return patchItemResourceDemandeurPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-demandeur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceDemandeurPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDemandeurPatch(params: PatchItemResourceDemandeurPatch$Params, context?: HttpContext): Observable<EntityModelDemandeur> {
    return this.patchItemResourceDemandeurPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDemandeur>): EntityModelDemandeur => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet1()` */
  static readonly FollowPropertyReferenceDemandeurGet1Path = '/demandeurs/{id}/departement_naissance_id';

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet1$Json$Response(params: FollowPropertyReferenceDemandeurGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return followPropertyReferenceDemandeurGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet1$Json(params: FollowPropertyReferenceDemandeurGet1$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.followPropertyReferenceDemandeurGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet1$UriList$Response(params: FollowPropertyReferenceDemandeurGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet1$UriList(params: FollowPropertyReferenceDemandeurGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut()` */
  static readonly CreatePropertyReferenceDemandeurPutPath = '/demandeurs/{id}/departement_naissance_id';

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut$Json$Response(params: CreatePropertyReferenceDemandeurPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut$Json(params: CreatePropertyReferenceDemandeurPut$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut$UriList$Response(params: CreatePropertyReferenceDemandeurPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut$UriList(params: CreatePropertyReferenceDemandeurPut$UriList$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete()` */
  static readonly DeletePropertyReferenceDemandeurDeletePath = '/demandeurs/{id}/departement_naissance_id';

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete$Response(params: DeletePropertyReferenceDemandeurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete(params: DeletePropertyReferenceDemandeurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch()` */
  static readonly CreatePropertyReferenceDemandeurPatchPath = '/demandeurs/{id}/departement_naissance_id';

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch$Json$Response(params: CreatePropertyReferenceDemandeurPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch$Json(params: CreatePropertyReferenceDemandeurPatch$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch$UriList$Response(params: CreatePropertyReferenceDemandeurPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch$UriList(params: CreatePropertyReferenceDemandeurPatch$UriList$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet()` */
  static readonly FollowPropertyReferenceDemandeurGetPath = '/demandeurs/{id}/departement_naissance_id/{propertyId}';

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet$Response(params: FollowPropertyReferenceDemandeurGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return followPropertyReferenceDemandeurGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet(params: FollowPropertyReferenceDemandeurGet$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.followPropertyReferenceDemandeurGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete()` */
  static readonly DeletePropertyReferenceIdDemandeurDeletePath = '/demandeurs/{id}/departement_naissance_id/{propertyId}';

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete$Response(params: DeletePropertyReferenceIdDemandeurDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete(params: DeletePropertyReferenceIdDemandeurDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet21()` */
  static readonly FollowPropertyReferenceDemandeurGet21Path = '/demandeurs/{id}/departement_residense_id';

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet21$Json$Response(params: FollowPropertyReferenceDemandeurGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return followPropertyReferenceDemandeurGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet21$Json(params: FollowPropertyReferenceDemandeurGet21$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.followPropertyReferenceDemandeurGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet21$UriList$Response(params: FollowPropertyReferenceDemandeurGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet21$UriList(params: FollowPropertyReferenceDemandeurGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut1()` */
  static readonly CreatePropertyReferenceDemandeurPut1Path = '/demandeurs/{id}/departement_residense_id';

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut1$Json$Response(params: CreatePropertyReferenceDemandeurPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut1$Json(params: CreatePropertyReferenceDemandeurPut1$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut1$UriList$Response(params: CreatePropertyReferenceDemandeurPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut1$UriList(params: CreatePropertyReferenceDemandeurPut1$UriList$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete1()` */
  static readonly DeletePropertyReferenceDemandeurDelete1Path = '/demandeurs/{id}/departement_residense_id';

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete1$Response(params: DeletePropertyReferenceDemandeurDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete1(params: DeletePropertyReferenceDemandeurDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch1()` */
  static readonly CreatePropertyReferenceDemandeurPatch1Path = '/demandeurs/{id}/departement_residense_id';

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch1$Json$Response(params: CreatePropertyReferenceDemandeurPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch1$Json(params: CreatePropertyReferenceDemandeurPatch1$Json$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch1$UriList$Response(params: CreatePropertyReferenceDemandeurPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return createPropertyReferenceDemandeurPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch1$UriList(params: CreatePropertyReferenceDemandeurPatch1$UriList$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.createPropertyReferenceDemandeurPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet2()` */
  static readonly FollowPropertyReferenceDemandeurGet2Path = '/demandeurs/{id}/departement_residense_id/{propertyId}';

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet2$Response(params: FollowPropertyReferenceDemandeurGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelDepartement>> {
    return followPropertyReferenceDemandeurGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet2(params: FollowPropertyReferenceDemandeurGet2$Params, context?: HttpContext): Observable<EntityModelDepartement> {
    return this.followPropertyReferenceDemandeurGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelDepartement>): EntityModelDepartement => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete1()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete1Path = '/demandeurs/{id}/departement_residense_id/{propertyId}';

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete1$Response(params: DeletePropertyReferenceIdDemandeurDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-departement-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete1(params: DeletePropertyReferenceIdDemandeurDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet31()` */
  static readonly FollowPropertyReferenceDemandeurGet31Path = '/demandeurs/{id}/emplois';

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet31$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet31$Json$Response(params: FollowPropertyReferenceDemandeurGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return followPropertyReferenceDemandeurGet31$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet31$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet31$Json(params: FollowPropertyReferenceDemandeurGet31$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.followPropertyReferenceDemandeurGet31$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet31$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet31$UriList$Response(params: FollowPropertyReferenceDemandeurGet31$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet31$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet31$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet31$UriList(params: FollowPropertyReferenceDemandeurGet31$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet31$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut2()` */
  static readonly CreatePropertyReferenceDemandeurPut2Path = '/demandeurs/{id}/emplois';

  /**
   * update-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut2$Json$Response(params: CreatePropertyReferenceDemandeurPut2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceDemandeurPut2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut2$Json(params: CreatePropertyReferenceDemandeurPut2$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceDemandeurPut2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * update-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut2$UriList$Response(params: CreatePropertyReferenceDemandeurPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceDemandeurPut2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut2$UriList(params: CreatePropertyReferenceDemandeurPut2$UriList$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceDemandeurPut2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete2()` */
  static readonly DeletePropertyReferenceDemandeurDelete2Path = '/demandeurs/{id}/emplois';

  /**
   * delete-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete2$Response(params: DeletePropertyReferenceDemandeurDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete2(params: DeletePropertyReferenceDemandeurDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch2()` */
  static readonly CreatePropertyReferenceDemandeurPatch2Path = '/demandeurs/{id}/emplois';

  /**
   * patch-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch2$Json$Response(params: CreatePropertyReferenceDemandeurPatch2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceDemandeurPatch2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch2$Json(params: CreatePropertyReferenceDemandeurPatch2$Json$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceDemandeurPatch2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /**
   * patch-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch2$UriList$Response(params: CreatePropertyReferenceDemandeurPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return createPropertyReferenceDemandeurPatch2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch2$UriList(params: CreatePropertyReferenceDemandeurPatch2$UriList$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.createPropertyReferenceDemandeurPatch2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet3()` */
  static readonly FollowPropertyReferenceDemandeurGet3Path = '/demandeurs/{id}/emplois/{propertyId}';

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet3$Response(params: FollowPropertyReferenceDemandeurGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEmploi>> {
    return followPropertyReferenceDemandeurGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * get-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet3(params: FollowPropertyReferenceDemandeurGet3$Params, context?: HttpContext): Observable<CollectionModelEmploi> {
    return this.followPropertyReferenceDemandeurGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEmploi>): CollectionModelEmploi => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete2()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete2Path = '/demandeurs/{id}/emplois/{propertyId}';

  /**
   * delete-emploi-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete2$Response(params: DeletePropertyReferenceIdDemandeurDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-emploi-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete2(params: DeletePropertyReferenceIdDemandeurDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet41()` */
  static readonly FollowPropertyReferenceDemandeurGet41Path = '/demandeurs/{id}/formation';

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet41$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet41$Json$Response(params: FollowPropertyReferenceDemandeurGet41$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return followPropertyReferenceDemandeurGet41$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet41$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet41$Json(params: FollowPropertyReferenceDemandeurGet41$Json$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.followPropertyReferenceDemandeurGet41$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet41$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet41$UriList$Response(params: FollowPropertyReferenceDemandeurGet41$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet41$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet41$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet41$UriList(params: FollowPropertyReferenceDemandeurGet41$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet41$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut3()` */
  static readonly CreatePropertyReferenceDemandeurPut3Path = '/demandeurs/{id}/formation';

  /**
   * update-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut3$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut3$Json$Response(params: CreatePropertyReferenceDemandeurPut3$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return createPropertyReferenceDemandeurPut3$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut3$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut3$Json(params: CreatePropertyReferenceDemandeurPut3$Json$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.createPropertyReferenceDemandeurPut3$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /**
   * update-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut3$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut3$UriList$Response(params: CreatePropertyReferenceDemandeurPut3$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return createPropertyReferenceDemandeurPut3$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut3$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut3$UriList(params: CreatePropertyReferenceDemandeurPut3$UriList$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.createPropertyReferenceDemandeurPut3$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete3()` */
  static readonly DeletePropertyReferenceDemandeurDelete3Path = '/demandeurs/{id}/formation';

  /**
   * delete-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete3$Response(params: DeletePropertyReferenceDemandeurDelete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete3(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete3(params: DeletePropertyReferenceDemandeurDelete3$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch3()` */
  static readonly CreatePropertyReferenceDemandeurPatch3Path = '/demandeurs/{id}/formation';

  /**
   * patch-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch3$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch3$Json$Response(params: CreatePropertyReferenceDemandeurPatch3$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return createPropertyReferenceDemandeurPatch3$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch3$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch3$Json(params: CreatePropertyReferenceDemandeurPatch3$Json$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.createPropertyReferenceDemandeurPatch3$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /**
   * patch-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch3$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch3$UriList$Response(params: CreatePropertyReferenceDemandeurPatch3$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return createPropertyReferenceDemandeurPatch3$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch3$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch3$UriList(params: CreatePropertyReferenceDemandeurPatch3$UriList$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.createPropertyReferenceDemandeurPatch3$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet4()` */
  static readonly FollowPropertyReferenceDemandeurGet4Path = '/demandeurs/{id}/formation/{propertyId}';

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet4()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet4$Response(params: FollowPropertyReferenceDemandeurGet4$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelFormation>> {
    return followPropertyReferenceDemandeurGet4(this.http, this.rootUrl, params, context);
  }

  /**
   * get-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet4(params: FollowPropertyReferenceDemandeurGet4$Params, context?: HttpContext): Observable<EntityModelFormation> {
    return this.followPropertyReferenceDemandeurGet4$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelFormation>): EntityModelFormation => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete3()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete3Path = '/demandeurs/{id}/formation/{propertyId}';

  /**
   * delete-formation-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete3$Response(params: DeletePropertyReferenceIdDemandeurDelete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete3(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-formation-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete3(params: DeletePropertyReferenceIdDemandeurDelete3$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet51()` */
  static readonly FollowPropertyReferenceDemandeurGet51Path = '/demandeurs/{id}/handicaps';

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet51$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet51$Json$Response(params: FollowPropertyReferenceDemandeurGet51$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return followPropertyReferenceDemandeurGet51$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet51$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet51$Json(params: FollowPropertyReferenceDemandeurGet51$Json$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.followPropertyReferenceDemandeurGet51$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet51$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet51$UriList$Response(params: FollowPropertyReferenceDemandeurGet51$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet51$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet51$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet51$UriList(params: FollowPropertyReferenceDemandeurGet51$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet51$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut4()` */
  static readonly CreatePropertyReferenceDemandeurPut4Path = '/demandeurs/{id}/handicaps';

  /**
   * update-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut4$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut4$Json$Response(params: CreatePropertyReferenceDemandeurPut4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return createPropertyReferenceDemandeurPut4$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut4$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut4$Json(params: CreatePropertyReferenceDemandeurPut4$Json$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.createPropertyReferenceDemandeurPut4$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /**
   * update-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut4$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut4$UriList$Response(params: CreatePropertyReferenceDemandeurPut4$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return createPropertyReferenceDemandeurPut4$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut4$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut4$UriList(params: CreatePropertyReferenceDemandeurPut4$UriList$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.createPropertyReferenceDemandeurPut4$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete4()` */
  static readonly DeletePropertyReferenceDemandeurDelete4Path = '/demandeurs/{id}/handicaps';

  /**
   * delete-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete4$Response(params: DeletePropertyReferenceDemandeurDelete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete4(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete4(params: DeletePropertyReferenceDemandeurDelete4$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch4()` */
  static readonly CreatePropertyReferenceDemandeurPatch4Path = '/demandeurs/{id}/handicaps';

  /**
   * patch-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch4$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch4$Json$Response(params: CreatePropertyReferenceDemandeurPatch4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return createPropertyReferenceDemandeurPatch4$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch4$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch4$Json(params: CreatePropertyReferenceDemandeurPatch4$Json$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.createPropertyReferenceDemandeurPatch4$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /**
   * patch-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch4$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch4$UriList$Response(params: CreatePropertyReferenceDemandeurPatch4$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return createPropertyReferenceDemandeurPatch4$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch4$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch4$UriList(params: CreatePropertyReferenceDemandeurPatch4$UriList$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.createPropertyReferenceDemandeurPatch4$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet5()` */
  static readonly FollowPropertyReferenceDemandeurGet5Path = '/demandeurs/{id}/handicaps/{propertyId}';

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet5()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet5$Response(params: FollowPropertyReferenceDemandeurGet5$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelHandicap>> {
    return followPropertyReferenceDemandeurGet5(this.http, this.rootUrl, params, context);
  }

  /**
   * get-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet5(params: FollowPropertyReferenceDemandeurGet5$Params, context?: HttpContext): Observable<CollectionModelHandicap> {
    return this.followPropertyReferenceDemandeurGet5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelHandicap>): CollectionModelHandicap => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete4()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete4Path = '/demandeurs/{id}/handicaps/{propertyId}';

  /**
   * delete-handicap-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete4$Response(params: DeletePropertyReferenceIdDemandeurDelete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete4(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-handicap-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete4(params: DeletePropertyReferenceIdDemandeurDelete4$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet61()` */
  static readonly FollowPropertyReferenceDemandeurGet61Path = '/demandeurs/{id}/images';

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet61$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet61$Json$Response(params: FollowPropertyReferenceDemandeurGet61$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return followPropertyReferenceDemandeurGet61$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet61$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet61$Json(params: FollowPropertyReferenceDemandeurGet61$Json$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.followPropertyReferenceDemandeurGet61$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet61$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet61$UriList$Response(params: FollowPropertyReferenceDemandeurGet61$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet61$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet61$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet61$UriList(params: FollowPropertyReferenceDemandeurGet61$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet61$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut5()` */
  static readonly CreatePropertyReferenceDemandeurPut5Path = '/demandeurs/{id}/images';

  /**
   * update-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut5$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut5$Json$Response(params: CreatePropertyReferenceDemandeurPut5$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return createPropertyReferenceDemandeurPut5$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut5$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut5$Json(params: CreatePropertyReferenceDemandeurPut5$Json$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.createPropertyReferenceDemandeurPut5$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /**
   * update-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut5$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut5$UriList$Response(params: CreatePropertyReferenceDemandeurPut5$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return createPropertyReferenceDemandeurPut5$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut5$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut5$UriList(params: CreatePropertyReferenceDemandeurPut5$UriList$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.createPropertyReferenceDemandeurPut5$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete5()` */
  static readonly DeletePropertyReferenceDemandeurDelete5Path = '/demandeurs/{id}/images';

  /**
   * delete-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete5$Response(params: DeletePropertyReferenceDemandeurDelete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete5(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete5(params: DeletePropertyReferenceDemandeurDelete5$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch5()` */
  static readonly CreatePropertyReferenceDemandeurPatch5Path = '/demandeurs/{id}/images';

  /**
   * patch-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch5$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch5$Json$Response(params: CreatePropertyReferenceDemandeurPatch5$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return createPropertyReferenceDemandeurPatch5$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch5$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch5$Json(params: CreatePropertyReferenceDemandeurPatch5$Json$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.createPropertyReferenceDemandeurPatch5$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /**
   * patch-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch5$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch5$UriList$Response(params: CreatePropertyReferenceDemandeurPatch5$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return createPropertyReferenceDemandeurPatch5$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch5$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch5$UriList(params: CreatePropertyReferenceDemandeurPatch5$UriList$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.createPropertyReferenceDemandeurPatch5$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet6()` */
  static readonly FollowPropertyReferenceDemandeurGet6Path = '/demandeurs/{id}/images/{propertyId}';

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet6()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet6$Response(params: FollowPropertyReferenceDemandeurGet6$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelImage>> {
    return followPropertyReferenceDemandeurGet6(this.http, this.rootUrl, params, context);
  }

  /**
   * get-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet6(params: FollowPropertyReferenceDemandeurGet6$Params, context?: HttpContext): Observable<CollectionModelImage> {
    return this.followPropertyReferenceDemandeurGet6$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelImage>): CollectionModelImage => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete5()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete5Path = '/demandeurs/{id}/images/{propertyId}';

  /**
   * delete-image-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete5$Response(params: DeletePropertyReferenceIdDemandeurDelete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete5(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-image-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete5(params: DeletePropertyReferenceIdDemandeurDelete5$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet71()` */
  static readonly FollowPropertyReferenceDemandeurGet71Path = '/demandeurs/{id}/proces_verbal';

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet71$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet71$Json$Response(params: FollowPropertyReferenceDemandeurGet71$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return followPropertyReferenceDemandeurGet71$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet71$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet71$Json(params: FollowPropertyReferenceDemandeurGet71$Json$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.followPropertyReferenceDemandeurGet71$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet71$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet71$UriList$Response(params: FollowPropertyReferenceDemandeurGet71$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet71$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet71$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet71$UriList(params: FollowPropertyReferenceDemandeurGet71$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet71$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut6()` */
  static readonly CreatePropertyReferenceDemandeurPut6Path = '/demandeurs/{id}/proces_verbal';

  /**
   * update-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut6$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut6$Json$Response(params: CreatePropertyReferenceDemandeurPut6$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return createPropertyReferenceDemandeurPut6$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut6$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut6$Json(params: CreatePropertyReferenceDemandeurPut6$Json$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.createPropertyReferenceDemandeurPut6$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /**
   * update-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut6$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut6$UriList$Response(params: CreatePropertyReferenceDemandeurPut6$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return createPropertyReferenceDemandeurPut6$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut6$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut6$UriList(params: CreatePropertyReferenceDemandeurPut6$UriList$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.createPropertyReferenceDemandeurPut6$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete6()` */
  static readonly DeletePropertyReferenceDemandeurDelete6Path = '/demandeurs/{id}/proces_verbal';

  /**
   * delete-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete6$Response(params: DeletePropertyReferenceDemandeurDelete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete6(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete6(params: DeletePropertyReferenceDemandeurDelete6$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch6()` */
  static readonly CreatePropertyReferenceDemandeurPatch6Path = '/demandeurs/{id}/proces_verbal';

  /**
   * patch-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch6$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch6$Json$Response(params: CreatePropertyReferenceDemandeurPatch6$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return createPropertyReferenceDemandeurPatch6$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch6$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch6$Json(params: CreatePropertyReferenceDemandeurPatch6$Json$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.createPropertyReferenceDemandeurPatch6$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /**
   * patch-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch6$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch6$UriList$Response(params: CreatePropertyReferenceDemandeurPatch6$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return createPropertyReferenceDemandeurPatch6$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch6$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch6$UriList(params: CreatePropertyReferenceDemandeurPatch6$UriList$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.createPropertyReferenceDemandeurPatch6$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet7()` */
  static readonly FollowPropertyReferenceDemandeurGet7Path = '/demandeurs/{id}/proces_verbal/{propertyId}';

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet7()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet7$Response(params: FollowPropertyReferenceDemandeurGet7$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelProcesVerbal>> {
    return followPropertyReferenceDemandeurGet7(this.http, this.rootUrl, params, context);
  }

  /**
   * get-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet7(params: FollowPropertyReferenceDemandeurGet7$Params, context?: HttpContext): Observable<EntityModelProcesVerbal> {
    return this.followPropertyReferenceDemandeurGet7$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelProcesVerbal>): EntityModelProcesVerbal => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete6()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete6Path = '/demandeurs/{id}/proces_verbal/{propertyId}';

  /**
   * delete-procesverbal-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete6$Response(params: DeletePropertyReferenceIdDemandeurDelete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete6(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-procesverbal-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete6(params: DeletePropertyReferenceIdDemandeurDelete6$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet81()` */
  static readonly FollowPropertyReferenceDemandeurGet81Path = '/demandeurs/{id}/region_naissance_id';

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet81$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet81$Json$Response(params: FollowPropertyReferenceDemandeurGet81$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return followPropertyReferenceDemandeurGet81$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet81$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet81$Json(params: FollowPropertyReferenceDemandeurGet81$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.followPropertyReferenceDemandeurGet81$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet81$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet81$UriList$Response(params: FollowPropertyReferenceDemandeurGet81$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet81$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet81$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet81$UriList(params: FollowPropertyReferenceDemandeurGet81$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet81$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut7()` */
  static readonly CreatePropertyReferenceDemandeurPut7Path = '/demandeurs/{id}/region_naissance_id';

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut7$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut7$Json$Response(params: CreatePropertyReferenceDemandeurPut7$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPut7$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut7$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut7$Json(params: CreatePropertyReferenceDemandeurPut7$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPut7$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut7$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut7$UriList$Response(params: CreatePropertyReferenceDemandeurPut7$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPut7$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut7$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut7$UriList(params: CreatePropertyReferenceDemandeurPut7$UriList$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPut7$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete7()` */
  static readonly DeletePropertyReferenceDemandeurDelete7Path = '/demandeurs/{id}/region_naissance_id';

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete7$Response(params: DeletePropertyReferenceDemandeurDelete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete7(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete7(params: DeletePropertyReferenceDemandeurDelete7$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch7()` */
  static readonly CreatePropertyReferenceDemandeurPatch7Path = '/demandeurs/{id}/region_naissance_id';

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch7$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch7$Json$Response(params: CreatePropertyReferenceDemandeurPatch7$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPatch7$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch7$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch7$Json(params: CreatePropertyReferenceDemandeurPatch7$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPatch7$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch7$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch7$UriList$Response(params: CreatePropertyReferenceDemandeurPatch7$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPatch7$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch7$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch7$UriList(params: CreatePropertyReferenceDemandeurPatch7$UriList$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPatch7$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet8()` */
  static readonly FollowPropertyReferenceDemandeurGet8Path = '/demandeurs/{id}/region_naissance_id/{propertyId}';

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet8()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet8$Response(params: FollowPropertyReferenceDemandeurGet8$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return followPropertyReferenceDemandeurGet8(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet8(params: FollowPropertyReferenceDemandeurGet8$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.followPropertyReferenceDemandeurGet8$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete7()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete7Path = '/demandeurs/{id}/region_naissance_id/{propertyId}';

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete7$Response(params: DeletePropertyReferenceIdDemandeurDelete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete7(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete7(params: DeletePropertyReferenceIdDemandeurDelete7$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet91()` */
  static readonly FollowPropertyReferenceDemandeurGet91Path = '/demandeurs/{id}/region_residense_id';

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet91$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet91$Json$Response(params: FollowPropertyReferenceDemandeurGet91$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return followPropertyReferenceDemandeurGet91$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet91$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet91$Json(params: FollowPropertyReferenceDemandeurGet91$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.followPropertyReferenceDemandeurGet91$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet91$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet91$UriList$Response(params: FollowPropertyReferenceDemandeurGet91$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet91$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet91$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet91$UriList(params: FollowPropertyReferenceDemandeurGet91$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet91$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut8()` */
  static readonly CreatePropertyReferenceDemandeurPut8Path = '/demandeurs/{id}/region_residense_id';

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut8$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut8$Json$Response(params: CreatePropertyReferenceDemandeurPut8$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPut8$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut8$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut8$Json(params: CreatePropertyReferenceDemandeurPut8$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPut8$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut8$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut8$UriList$Response(params: CreatePropertyReferenceDemandeurPut8$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPut8$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut8$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut8$UriList(params: CreatePropertyReferenceDemandeurPut8$UriList$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPut8$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete8()` */
  static readonly DeletePropertyReferenceDemandeurDelete8Path = '/demandeurs/{id}/region_residense_id';

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete8$Response(params: DeletePropertyReferenceDemandeurDelete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete8(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete8(params: DeletePropertyReferenceDemandeurDelete8$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch8()` */
  static readonly CreatePropertyReferenceDemandeurPatch8Path = '/demandeurs/{id}/region_residense_id';

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch8$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch8$Json$Response(params: CreatePropertyReferenceDemandeurPatch8$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPatch8$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch8$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch8$Json(params: CreatePropertyReferenceDemandeurPatch8$Json$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPatch8$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch8$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch8$UriList$Response(params: CreatePropertyReferenceDemandeurPatch8$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return createPropertyReferenceDemandeurPatch8$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch8$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch8$UriList(params: CreatePropertyReferenceDemandeurPatch8$UriList$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.createPropertyReferenceDemandeurPatch8$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet9()` */
  static readonly FollowPropertyReferenceDemandeurGet9Path = '/demandeurs/{id}/region_residense_id/{propertyId}';

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet9()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet9$Response(params: FollowPropertyReferenceDemandeurGet9$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRegion>> {
    return followPropertyReferenceDemandeurGet9(this.http, this.rootUrl, params, context);
  }

  /**
   * get-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet9(params: FollowPropertyReferenceDemandeurGet9$Params, context?: HttpContext): Observable<EntityModelRegion> {
    return this.followPropertyReferenceDemandeurGet9$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRegion>): EntityModelRegion => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete8()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete8Path = '/demandeurs/{id}/region_residense_id/{propertyId}';

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete8$Response(params: DeletePropertyReferenceIdDemandeurDelete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete8(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-region-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete8(params: DeletePropertyReferenceIdDemandeurDelete8$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet101()` */
  static readonly FollowPropertyReferenceDemandeurGet101Path = '/demandeurs/{id}/secteurs';

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet101$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet101$Json$Response(params: FollowPropertyReferenceDemandeurGet101$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return followPropertyReferenceDemandeurGet101$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet101$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet101$Json(params: FollowPropertyReferenceDemandeurGet101$Json$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.followPropertyReferenceDemandeurGet101$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet101$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet101$UriList$Response(params: FollowPropertyReferenceDemandeurGet101$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet101$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet101$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet101$UriList(params: FollowPropertyReferenceDemandeurGet101$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet101$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut9()` */
  static readonly CreatePropertyReferenceDemandeurPut9Path = '/demandeurs/{id}/secteurs';

  /**
   * update-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut9$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut9$Json$Response(params: CreatePropertyReferenceDemandeurPut9$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return createPropertyReferenceDemandeurPut9$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut9$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut9$Json(params: CreatePropertyReferenceDemandeurPut9$Json$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.createPropertyReferenceDemandeurPut9$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /**
   * update-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut9$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut9$UriList$Response(params: CreatePropertyReferenceDemandeurPut9$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return createPropertyReferenceDemandeurPut9$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut9$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut9$UriList(params: CreatePropertyReferenceDemandeurPut9$UriList$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.createPropertyReferenceDemandeurPut9$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete9()` */
  static readonly DeletePropertyReferenceDemandeurDelete9Path = '/demandeurs/{id}/secteurs';

  /**
   * delete-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete9()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete9$Response(params: DeletePropertyReferenceDemandeurDelete9$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete9(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete9(params: DeletePropertyReferenceDemandeurDelete9$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete9$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch9()` */
  static readonly CreatePropertyReferenceDemandeurPatch9Path = '/demandeurs/{id}/secteurs';

  /**
   * patch-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch9$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch9$Json$Response(params: CreatePropertyReferenceDemandeurPatch9$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return createPropertyReferenceDemandeurPatch9$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch9$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch9$Json(params: CreatePropertyReferenceDemandeurPatch9$Json$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.createPropertyReferenceDemandeurPatch9$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /**
   * patch-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch9$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch9$UriList$Response(params: CreatePropertyReferenceDemandeurPatch9$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return createPropertyReferenceDemandeurPatch9$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch9$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch9$UriList(params: CreatePropertyReferenceDemandeurPatch9$UriList$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.createPropertyReferenceDemandeurPatch9$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet10()` */
  static readonly FollowPropertyReferenceDemandeurGet10Path = '/demandeurs/{id}/secteurs/{propertyId}';

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet10()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet10$Response(params: FollowPropertyReferenceDemandeurGet10$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelSecteur>> {
    return followPropertyReferenceDemandeurGet10(this.http, this.rootUrl, params, context);
  }

  /**
   * get-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet10(params: FollowPropertyReferenceDemandeurGet10$Params, context?: HttpContext): Observable<CollectionModelSecteur> {
    return this.followPropertyReferenceDemandeurGet10$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelSecteur>): CollectionModelSecteur => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete9()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete9Path = '/demandeurs/{id}/secteurs/{propertyId}';

  /**
   * delete-secteur-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete9()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete9$Response(params: DeletePropertyReferenceIdDemandeurDelete9$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete9(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-secteur-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete9(params: DeletePropertyReferenceIdDemandeurDelete9$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete9$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet111()` */
  static readonly FollowPropertyReferenceDemandeurGet111Path = '/demandeurs/{id}/sexe';

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet111$Json$Response(params: FollowPropertyReferenceDemandeurGet111$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return followPropertyReferenceDemandeurGet111$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet111$Json(params: FollowPropertyReferenceDemandeurGet111$Json$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.followPropertyReferenceDemandeurGet111$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet111$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet111$UriList$Response(params: FollowPropertyReferenceDemandeurGet111$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet111$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet111$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet111$UriList(params: FollowPropertyReferenceDemandeurGet111$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet111$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut10()` */
  static readonly CreatePropertyReferenceDemandeurPut10Path = '/demandeurs/{id}/sexe';

  /**
   * update-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut10$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut10$Json$Response(params: CreatePropertyReferenceDemandeurPut10$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return createPropertyReferenceDemandeurPut10$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut10$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut10$Json(params: CreatePropertyReferenceDemandeurPut10$Json$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.createPropertyReferenceDemandeurPut10$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /**
   * update-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut10$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut10$UriList$Response(params: CreatePropertyReferenceDemandeurPut10$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return createPropertyReferenceDemandeurPut10$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut10$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut10$UriList(params: CreatePropertyReferenceDemandeurPut10$UriList$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.createPropertyReferenceDemandeurPut10$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete10()` */
  static readonly DeletePropertyReferenceDemandeurDelete10Path = '/demandeurs/{id}/sexe';

  /**
   * delete-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete10()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete10$Response(params: DeletePropertyReferenceDemandeurDelete10$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete10(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete10(params: DeletePropertyReferenceDemandeurDelete10$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch10()` */
  static readonly CreatePropertyReferenceDemandeurPatch10Path = '/demandeurs/{id}/sexe';

  /**
   * patch-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch10$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch10$Json$Response(params: CreatePropertyReferenceDemandeurPatch10$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return createPropertyReferenceDemandeurPatch10$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch10$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch10$Json(params: CreatePropertyReferenceDemandeurPatch10$Json$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.createPropertyReferenceDemandeurPatch10$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /**
   * patch-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch10$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch10$UriList$Response(params: CreatePropertyReferenceDemandeurPatch10$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return createPropertyReferenceDemandeurPatch10$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch10$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch10$UriList(params: CreatePropertyReferenceDemandeurPatch10$UriList$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.createPropertyReferenceDemandeurPatch10$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet11()` */
  static readonly FollowPropertyReferenceDemandeurGet11Path = '/demandeurs/{id}/sexe/{propertyId}';

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet11()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet11$Response(params: FollowPropertyReferenceDemandeurGet11$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSexe>> {
    return followPropertyReferenceDemandeurGet11(this.http, this.rootUrl, params, context);
  }

  /**
   * get-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet11(params: FollowPropertyReferenceDemandeurGet11$Params, context?: HttpContext): Observable<EntityModelSexe> {
    return this.followPropertyReferenceDemandeurGet11$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSexe>): EntityModelSexe => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete10()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete10Path = '/demandeurs/{id}/sexe/{propertyId}';

  /**
   * delete-sexe-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete10()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete10$Response(params: DeletePropertyReferenceIdDemandeurDelete10$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete10(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-sexe-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete10(params: DeletePropertyReferenceIdDemandeurDelete10$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet121()` */
  static readonly FollowPropertyReferenceDemandeurGet121Path = '/demandeurs/{id}/situation_matrimoiniale';

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet121$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet121$Json$Response(params: FollowPropertyReferenceDemandeurGet121$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return followPropertyReferenceDemandeurGet121$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet121$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet121$Json(params: FollowPropertyReferenceDemandeurGet121$Json$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.followPropertyReferenceDemandeurGet121$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet121$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet121$UriList$Response(params: FollowPropertyReferenceDemandeurGet121$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet121$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet121$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet121$UriList(params: FollowPropertyReferenceDemandeurGet121$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet121$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut11()` */
  static readonly CreatePropertyReferenceDemandeurPut11Path = '/demandeurs/{id}/situation_matrimoiniale';

  /**
   * update-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut11$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut11$Json$Response(params: CreatePropertyReferenceDemandeurPut11$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return createPropertyReferenceDemandeurPut11$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut11$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut11$Json(params: CreatePropertyReferenceDemandeurPut11$Json$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.createPropertyReferenceDemandeurPut11$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /**
   * update-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut11$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut11$UriList$Response(params: CreatePropertyReferenceDemandeurPut11$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return createPropertyReferenceDemandeurPut11$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut11$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut11$UriList(params: CreatePropertyReferenceDemandeurPut11$UriList$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.createPropertyReferenceDemandeurPut11$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete11()` */
  static readonly DeletePropertyReferenceDemandeurDelete11Path = '/demandeurs/{id}/situation_matrimoiniale';

  /**
   * delete-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete11()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete11$Response(params: DeletePropertyReferenceDemandeurDelete11$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete11(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete11(params: DeletePropertyReferenceDemandeurDelete11$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete11$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch11()` */
  static readonly CreatePropertyReferenceDemandeurPatch11Path = '/demandeurs/{id}/situation_matrimoiniale';

  /**
   * patch-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch11$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch11$Json$Response(params: CreatePropertyReferenceDemandeurPatch11$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return createPropertyReferenceDemandeurPatch11$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch11$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch11$Json(params: CreatePropertyReferenceDemandeurPatch11$Json$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.createPropertyReferenceDemandeurPatch11$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /**
   * patch-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch11$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch11$UriList$Response(params: CreatePropertyReferenceDemandeurPatch11$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return createPropertyReferenceDemandeurPatch11$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch11$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch11$UriList(params: CreatePropertyReferenceDemandeurPatch11$UriList$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.createPropertyReferenceDemandeurPatch11$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet12()` */
  static readonly FollowPropertyReferenceDemandeurGet12Path = '/demandeurs/{id}/situation_matrimoiniale/{propertyId}';

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet12()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet12$Response(params: FollowPropertyReferenceDemandeurGet12$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelSituationMatrimoiniale>> {
    return followPropertyReferenceDemandeurGet12(this.http, this.rootUrl, params, context);
  }

  /**
   * get-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet12(params: FollowPropertyReferenceDemandeurGet12$Params, context?: HttpContext): Observable<EntityModelSituationMatrimoiniale> {
    return this.followPropertyReferenceDemandeurGet12$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelSituationMatrimoiniale>): EntityModelSituationMatrimoiniale => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete11()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete11Path = '/demandeurs/{id}/situation_matrimoiniale/{propertyId}';

  /**
   * delete-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete11()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete11$Response(params: DeletePropertyReferenceIdDemandeurDelete11$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete11(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-situationmatrimoiniale-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete11(params: DeletePropertyReferenceIdDemandeurDelete11$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete11$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet131()` */
  static readonly FollowPropertyReferenceDemandeurGet131Path = '/demandeurs/{id}/status';

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet131$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet131$Json$Response(params: FollowPropertyReferenceDemandeurGet131$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return followPropertyReferenceDemandeurGet131$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet131$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet131$Json(params: FollowPropertyReferenceDemandeurGet131$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.followPropertyReferenceDemandeurGet131$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet131$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet131$UriList$Response(params: FollowPropertyReferenceDemandeurGet131$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceDemandeurGet131$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet131$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet131$UriList(params: FollowPropertyReferenceDemandeurGet131$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceDemandeurGet131$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPut12()` */
  static readonly CreatePropertyReferenceDemandeurPut12Path = '/demandeurs/{id}/status';

  /**
   * update-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut12$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut12$Json$Response(params: CreatePropertyReferenceDemandeurPut12$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceDemandeurPut12$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut12$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPut12$Json(params: CreatePropertyReferenceDemandeurPut12$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceDemandeurPut12$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * update-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPut12$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut12$UriList$Response(params: CreatePropertyReferenceDemandeurPut12$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceDemandeurPut12$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPut12$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPut12$UriList(params: CreatePropertyReferenceDemandeurPut12$UriList$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceDemandeurPut12$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceDemandeurDelete12()` */
  static readonly DeletePropertyReferenceDemandeurDelete12Path = '/demandeurs/{id}/status';

  /**
   * delete-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceDemandeurDelete12()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete12$Response(params: DeletePropertyReferenceDemandeurDelete12$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceDemandeurDelete12(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceDemandeurDelete12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceDemandeurDelete12(params: DeletePropertyReferenceDemandeurDelete12$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceDemandeurDelete12$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceDemandeurPatch12()` */
  static readonly CreatePropertyReferenceDemandeurPatch12Path = '/demandeurs/{id}/status';

  /**
   * patch-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch12$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch12$Json$Response(params: CreatePropertyReferenceDemandeurPatch12$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceDemandeurPatch12$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch12$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceDemandeurPatch12$Json(params: CreatePropertyReferenceDemandeurPatch12$Json$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceDemandeurPatch12$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /**
   * patch-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceDemandeurPatch12$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch12$UriList$Response(params: CreatePropertyReferenceDemandeurPatch12$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return createPropertyReferenceDemandeurPatch12$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceDemandeurPatch12$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceDemandeurPatch12$UriList(params: CreatePropertyReferenceDemandeurPatch12$UriList$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.createPropertyReferenceDemandeurPatch12$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceDemandeurGet13()` */
  static readonly FollowPropertyReferenceDemandeurGet13Path = '/demandeurs/{id}/status/{propertyId}';

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceDemandeurGet13()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet13$Response(params: FollowPropertyReferenceDemandeurGet13$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStatut>> {
    return followPropertyReferenceDemandeurGet13(this.http, this.rootUrl, params, context);
  }

  /**
   * get-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceDemandeurGet13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceDemandeurGet13(params: FollowPropertyReferenceDemandeurGet13$Params, context?: HttpContext): Observable<EntityModelStatut> {
    return this.followPropertyReferenceDemandeurGet13$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStatut>): EntityModelStatut => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdDemandeurDelete12()` */
  static readonly DeletePropertyReferenceIdDemandeurDelete12Path = '/demandeurs/{id}/status/{propertyId}';

  /**
   * delete-statut-by-demandeur-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdDemandeurDelete12()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete12$Response(params: DeletePropertyReferenceIdDemandeurDelete12$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdDemandeurDelete12(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-statut-by-demandeur-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdDemandeurDelete12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdDemandeurDelete12(params: DeletePropertyReferenceIdDemandeurDelete12$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdDemandeurDelete12$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
