import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MeetMeComponent } from './components/meet-me/meet-me.component';
import { LifeCoachingComponent } from './components/life-coaching/life-coaching.component';
import { EnrichingReadsComponent } from './components/enriching-reads/enriching-reads.component';
import { ContactAndSocialMediaComponent } from './components/contact-and-social-media/contact-and-social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MeetMeComponent,
    LifeCoachingComponent,
    EnrichingReadsComponent,
    ContactAndSocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
