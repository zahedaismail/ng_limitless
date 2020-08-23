import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MeetMeComponent } from './components/meet-me/meet-me.component';
import { LifeCoachingComponent } from './components/life-coaching/life-coaching.component';
import { EnrichingReadsComponent } from './components/enriching-reads/enriching-reads.component';
import { ContactAndSocialMediaComponent } from './components/contact-and-social-media/contact-and-social-media.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'meet-me', component: MeetMeComponent},
  {path: 'life-coaching', component: LifeCoachingComponent},
  {path: 'enriching-reads', component: EnrichingReadsComponent},
  {path: 'contact-and-social-media', component: ContactAndSocialMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
