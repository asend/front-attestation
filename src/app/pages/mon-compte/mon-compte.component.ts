import {Component, OnInit} from '@angular/core';
import {DemandeurService} from "../../services/services/demandeur.service";
import {Demandeur} from "../../services/models/demandeur";
import {AuthService} from "../../auth/service/auth.service";
import {User} from "../../auth/model/user";
import {Sexe} from "../../services/models/sexe";
import {Statut} from "../../services/models/statut";
import {SituationMatrimoiniale} from "../../services/models/situation-matrimoiniale";
import {SexeService} from "../../services/services/sexe.service";
import {MatrimoinialeService} from "../../services/services/matrimoiniale.service";
import {Region} from "../../services/models/region";
import {EmploiService, FormationService, RegionService, SecteurService} from 'src/app/services/services';
import {HandicapService} from "../../auth/service/handicap.service"
import {ImageService} from "../../auth/service/image.service";
import {Departement} from "../../services/models/departement";
import {Image} from "../../services/models/image";
import {Handicap} from "../../services/models/handicap";
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {Formation} from "../../services/models/formation";
import {DemandeurDto, Emploi, EmploiDto, Secteur, SecteurDto} from "../../services/models";

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
  apiURL: string = 'http://localhost:8888/api'
  emplois: Array<EmploiDto> | undefined=[];
  secteurs: SecteurDto[] = [];
  mysecteurs: Array<SecteurDto> | undefined = [];
  myemplois: Array<EmploiDto> | undefined = [];
  demandeur: DemandeurDto = {};
  user: User = new User();
  username!: string;
  userId: number = 2;
  sexes!: Sexe[];
  newIdSexe!: number;
  statuts!: Statut[];
  situationMatrimoiniales: SituationMatrimoiniale[] =[];
  regionNaissance: Region[] = [];
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;
  sec!: SecteurDto
  selectedItems: Array<Handicap> | undefined ;
  handicaps: Handicap[] = [];
  dropdownSettings: IDropdownSettings = {};
  formations: Formation[] = [];
  em!: EmploiDto;
  exist: Boolean = false;
  constructor(private ds: DemandeurService,
              private auth: AuthService,
              private sexeService: SexeService,
              private smService: MatrimoinialeService,
              private regionService: RegionService,
              private imageService: ImageService,
              private handicapService: HandicapService,
              private formation: FormationService,
              private emploi: EmploiService,
              private secteur: SecteurService
            ) { }

  ngOnInit(): void {
    this.allSexe();
    this.allSM();
    this.auth.loadToken();
    this.username = this.auth.loggedUser;
    console.log("test "+this.auth.loggedUser);
    this.userGet()
    this.demandeurGet()
    this.loadEmplois()
    this.loadRegions()
    this.loadFormations()
    this.loadSecteurs()
    this.handicapService.handicapsGetAll().subscribe({
      next:(data)=>{
        this.handicaps = data;
        console.log(data);
      }
    })
    //this.selectedItems = this.demandeur.handicaps;


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Cocher tous',
      unSelectAllText: 'Décocher tous',
      //itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  userGet(){
    this.auth.getUser(this.username).subscribe({
      next:(d)=>{
        this.user = d;
      }
    })
  }

  private demandeurGet() {
    this.ds.findByUsername({'username': this.auth.loggedUser}).subscribe({
      next:(d)=>{
        console.log(d)
        this.demandeur = d;
        this.selectedItems = this.demandeur.handicaps;
        this.mysecteurs = d.secteurs;
        this.myemplois = d.emplois;
        console.log("tester ="+this.selectedItems)
      }
    })
  }
  private loadFormations(){
    this.formation.formationGetAll().subscribe({
      next:(data)=>{
        this.formations = data
      }
    })
  }

  private loadEmplois(){
    this.emploi.emploiGetAll().subscribe({
      next: (data)=>{
        this.emplois = data;
      }
    })
  }

  private loadSecteurs(){
    this.secteur.secteursGetAll().subscribe({
      next:(data)=>{
        this.secteurs = data;
      }
    })
  }
  allSexe(){
    this.sexeService.sexesGetAll().subscribe({
      next: (data)=>{
        this.sexes = data
      }
    })
  }

  allSM(){
    this.smService.situationMatrimoinialeServicesGetAll().subscribe({
      next:(data)=>{
        this.situationMatrimoiniales = data
      }
    })
  }

  loadRegions(){
    this.regionService.regionGetAll().subscribe({
      next: (data)=>{
        this.regionNaissance = data;
      }
    })
  }

  compareSM(sm1: SituationMatrimoiniale, sm2: SituationMatrimoiniale) : boolean{
    if (sm1 === undefined && sm2 === undefined) return true;
    return sm1 === null || sm2 === null || sm1 === undefined || sm2 === undefined ? false : sm1.id == sm2.id
  }

  compareRegion(r1: Region, r2: Region) : boolean{
    if (r1 === undefined && r2 === undefined) return true;
    return r1 === null || r2 === null || r1 === undefined || r2 === undefined ? false : r1.id == r2.id
  }

  compareDepartement(d1: Departement, d2: Departement) : boolean{
    if (d1 === undefined && d2 === undefined) return true;
    return d1 === null || d2 === null || d1 === undefined || d2 === undefined ? false : d1.id == d2.id
  }

  compareSexe(s1: Sexe, s2: Sexe) : boolean{
    if (s1 === undefined && s2 === undefined) return true;
    return s1 === null || s2 === null || s1 === undefined || s2 === undefined ? false : s1.id == s2.id
  }

  compareFormation(f1: Formation, f2: Sexe) : boolean{
    if (f1 === undefined && f2 === undefined) return true;
    return f1 === null || f2 === null || f1 === undefined || f2 === undefined ? false : f1.id == f2.id
  }

  /*getDepartementByRegion() {
    this.departementNaissaces = [];
    this.demandeur.region_naissance_id?.departements?.forEach((d) => {
      this.departementNaissaces.push(d)
    })
    console.log(this.departementNaissaces)
  }*/

  valider() {

    this.demandeur.handicaps = this.selectedItems;
    //this.demandeur.emplois = this.emplois;
    this.demandeur.secteurs = this.mysecteurs;
    this.demandeur.emplois = this.myemplois;
    this.demandeur.username = this.user.username;
    this.demandeur.user=Number(localStorage.getItem("userId"))
    this.demandeur.username=this.auth.loggedUser

    //console.log(this.selectedItems)
    if (this.demandeur.id!=undefined){
      this.ds.demadeurUpdate({'body':this.demandeur}).subscribe({
        next:(data)=>{
          console.log(data)
        }
      })
      console.log(this.demandeur)
    }else{
      console.log(this.demandeur)
      this.ds.demandeurCreate({'body':this.demandeur}).subscribe({
        next:(data)=>{
          console.log("success");
        }
      })
      //this.demandeur.user=Number(localStorage.getItem("userId"))
      //this.demandeur.username=this.auth.loggedUser
      /*console.log(this.demandeur)
      this.ds.demandeurCreate({'body':this.demandeur}).subscribe({
        next:(data)=>{
          console.log(data)
        }
      })*/
    }
   /* */
    /**/
  }

  onImageUpload($event: Event) {
    // @ts-ignore
    if(event.target.files && event.target.files.length) {
      // @ts-ignore
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated =true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }

  onAddImageDemandeur() {

    //console.log(this.uploadedImage)
    this.imageService.uploadImageFS(this.uploadedImage, this.uploadedImage.name, Number(this.demandeur.id)).subscribe(
      {
        next:(data)=>{
          this.demandeur.images?.push(data);
          //console.log(data.nom)
        }

      }
    )
  }

  supprimerImage(img: Image) {
    console.log(img.id)
    this.imageService.supprimerImage(Number(img.id)).subscribe({
      next:(data)=>{
        // @ts-ignore
        const index = this.demandeur.images.indexOf(img, 0);
        if (index > -1) {
          // @ts-ignore
          this.demandeur.images.splice(index, 1);
        }
      }
    })
  }
  onItemSelect(item: any) {
    //console.log('onItemSelect', item);
    console.log('selectedItem', this.selectedItems);
    this.demandeur.handicaps = this.selectedItems;
   /* this.selectedItems = [];
    //console.log(item.id);
    // @ts-ignore
    this.selectedItems.push(item);
    this.demandeur.handicaps?.push(item);
    /!*this.handicapService.getHandicap(Number(item.id)).subscribe({
      next: (d)=>{
        this.selectedItems.push(d);
      }
    })*!/
    console.log(this.demandeur.handicaps)*/
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItemDeSelecte(item: any){
    this.demandeur.handicaps?.splice(2,1)
    this.selectedItems?.splice(1,1);
    console.log("item ="+this.selectedItems);
  }

  addEmploi() {
    let emploi: EmploiDto = {
      libelle: ''
    };
    let secteur: Secteur = {};
    this.demandeur.secteurs?.push(secteur)
    this.demandeur.emplois?.push(emploi)
    this.mysecteurs?.push(secteur)
    //console.log(this.demandeur.secteurs)
  }



  onSecteurChange(value: any) {
    this.exist = true
    this.emplois = this.sec.emploiDtos
    console.log(this.sec.emploiDtos)
  }

  onEmploiChange($event: Event) {
    var empl = this.demandeur.emplois?.find(emploi=>emploi.id===this.em.id);
    // @ts-ignore
    if(!empl){
      this.myemplois?.push(this.em);
      if (this.em.secteur) {
        this.mysecteurs?.push(this.em.secteur)
      }
      //this.demandeur.emplois?.push(this.em);
      //this.demandeur.secteurs?.push(this.sec);
    }

    console.log(" demandeur "+this.demandeur)
  }

  supprimerEmploi(emploi: EmploiDto) {

    // @ts-ignore
    const index = this.myemplois.indexOf(emploi, 0);
    if (index > -1) {
      // @ts-ignore
      this.myemplois.splice(index, 1);
      if (emploi.secteur) {
        const indice = this.mysecteurs?.indexOf(emploi.secteur, 0)
        // @ts-ignore
        if (indice > -1){
          // @ts-ignore
          this.mysecteurs?.splice(indice, 1)
        }
      }

    }
//ou
  }
}
