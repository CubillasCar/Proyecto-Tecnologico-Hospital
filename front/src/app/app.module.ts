import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { ServerErrorsInterceptor } from './shared/server-errors.interceptor';

// security
import { LoginComponent } from './pages/login/login.component';
import { Not403Component } from './pages/not403/not403.component';
import { Not404Component } from './pages/not404/not404.component';
import { RecuperarComponent } from './pages/login/recuperar/recuperar.component';
import { TokenComponent } from './pages/login/recuperar/token/token.component';

// medico
import { MedicoComponent } from './pages/medico/medico.component';
import { MedicoDialogoComponent } from './pages/medico/medico-dialogo/medico-dialogo.component';

// paciente
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { PacienteComponent } from './pages/paciente/paciente.component';

// especialidad
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';

export function tokenGetter() {
  return sessionStorage.getItem(environment.TOKEN_NAME);
}

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    EspecialidadComponent,
    EspecialidadEdicionComponent,
    MedicoComponent,
    PacienteEdicionComponent,
    MedicoDialogoComponent,
    LoginComponent,
    Not403Component,
    Not404Component,
    RecuperarComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    PdfViewerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.HOST.substring(7)],
        disallowedRoutes: [`http://${environment.HOST.substring(7)}/login/enviarCorreo`],
      },
    }),
  ],
  //entryComponents:[MedicoComponent], < Angular 7
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
