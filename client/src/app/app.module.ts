import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from '../services/authentication/http-interceptor';
import { ErrorInterceptor } from '../services/authentication/auth-guard';
import { JwtManager } from '../services/authentication/jwt-manager.service';
import { LanguageService } from 'src/services/language/lang.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { ApproutesComponent } from './approutes/approutes/approutes.component';
import { ParticlesModule } from 'angular-particle';
import { EndocSharedModule } from 'src/global/modules/clickshared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'projects/:projectId', loadChildren: './approutes/approutesbase.module#ApproutesBaseModule' },

  // { path: 'projects', component: ProjectsComponent },
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
      appRoutes
    ),
    DeviceDetectorModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
  return new TranslateHttpLoader(http);
}

