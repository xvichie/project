import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShellModule } from './shell/shell.module';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [	
        AppComponent
   ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ShellModule,
        SharedModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAuth(() => getAuth()),
        // provideFirestore(() => getFirestore()),
        // provideStorage(() => getStorage())
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }