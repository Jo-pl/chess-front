import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { BoardComponent } from './game/board/board.component';
import { SquareComponent } from './game/square/square.component';
import { HistoryComponent } from './game/history/history.component';
import { MainButtonComponent } from './shared/main-button/main-button.component';
import { PlayerInfoComponent } from './shared/player-info/player-info.component';
import { LoginComponent } from './home/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './shared/form-button/form-button.component';
import { FormInputComponent } from './shared/form-input/form-input.component';
import { RoundedIconComponent } from './shared/rounded-icon/rounded-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BoardComponent,
    SquareComponent,
    HistoryComponent,
    MainButtonComponent,
    PlayerInfoComponent,
    LoginComponent,
    FormButtonComponent,
    FormInputComponent,
    RoundedIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
