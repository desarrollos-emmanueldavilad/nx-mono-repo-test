import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { Inicio2Component } from './inicio2/inicio2.component';
import {MyLibModule} from 'libs/my-lib/src/lib/my-lib.module'

@NgModule({
    declarations: [
        AppComponent,
        Inicio2Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MyLibModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        Angulartics2Module.forRoot(),
        SharedModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [Inicio2Component]
})
export class AppModule { }
