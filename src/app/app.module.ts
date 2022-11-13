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
import { Proj2Component } from './projects/proj2/proj2.component';
import { Proj3Component } from './projects/proj3/proj3.component';
import { Proj4Component } from './projects/proj4/proj4.component';
import { Proj5Component } from './projects/proj5/proj5.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

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
    Proj2Component,
    Proj3Component,
    Proj4Component,
    Proj5Component,
    ProjectListComponent,
    ContactMeComponent,
    ScrollToTopComponent,

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
