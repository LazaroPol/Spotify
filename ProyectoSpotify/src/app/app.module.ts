import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { ButtonAccountComponent } from './button-account/button-account.component';
import { CreateListComponent } from './create-list/create-list.component';
import { LogoComponent } from './logo/logo.component';
import { ListComponent } from './list/list.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArrowsComponent,
    ButtonAccountComponent,  
    CreateListComponent,
    LogoComponent,
    ListComponent,
    PodcastComponent,
    PodcastListComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [HttpClientModule  ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
