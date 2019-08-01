import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from '../services/authentication/http-interceptor';
import { ErrorInterceptor } from '../services/authentication/auth-guard';
import { JwtManager } from '../services/authentication/jwt-manager.service';
import { LanguageService } from 'src/services/language/lang.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EndocSharedModule } from 'src/global/modules/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party libraries
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'project', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EndocSharedModule,
    RouterModule.forRoot(
      appRoutes, { useHash: true }
    ),
    DeviceDetectorModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      extendedTimeOut: 0,
      easeTime: 100,
      closeButton: true,
      preventDuplicates: true,
    })
  ],
  providers: [
    LanguageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    JwtManager
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  const baseUrl = environment.production ? '/endoc/assets/i18n/' : './assets/i18n/';
  return new TranslateHttpLoader(http, baseUrl);
}

