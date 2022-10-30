import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroBadgeComponent } from './hero-badge/hero-badge.component';



@NgModule({
  declarations: [HeroBannerComponent, HeroBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroBannerComponent]
})
export class HeroSectionModule { }
