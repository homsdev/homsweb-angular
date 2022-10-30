import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeroSectionModule } from './hero-section/hero-section.module';
import { SharedModule } from './shared/shared.module';
import { ProjectCardModule } from './project-card/project-card.module';
import { JobsModule } from './jobs-section/jobs.module';
import { AboutMeModule } from './about-me/about-me.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeroSectionModule,
    SharedModule,
    ProjectCardModule,
    JobsModule,
    AboutMeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
