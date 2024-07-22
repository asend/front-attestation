import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpInterceptorService} from "./auth/service/http-interceptor.service";
import {MonCompteComponent} from './pages/mon-compte/mon-compte.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TestComponent } from './pages/test/test.component';
import { NavComponent } from './pages/layout/nav/nav.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VerifEmailComponent } from './pages/verif-email/verif-email.component';
import { DataListComponent } from './pages/stat/data-list/data-list.component';
import {PaginationComponent} from "./pages/stat/pagination/pagination.component";
import { PaginnationComponent } from './pages/paginnation/paginnation.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        PaginationComponent,
        MonCompteComponent,
        TestComponent,
        NavComponent,
        FooterComponent,
        AccueilComponent,
        VerifEmailComponent,
        DataListComponent,
        PaginnationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        ReactiveFormsModule

    ],
    providers: [
        HttpClient,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ],
    exports: [
        PaginationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
