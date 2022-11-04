import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { SwiperModule } from 'swiper/angular';
import { EduExpComponent } from './edu-exp/edu-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { Proj1Component } from './projects/proj1/proj1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    EduExpComponent,
    SkillsComponent,
    WelcomeComponent,
    ExperienceComponent,
    FooterComponent,
    Proj1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
