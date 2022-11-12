import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Proj1Component } from './projects/proj1/proj1.component';
import { Proj2Component } from './projects/proj2/proj2.component';
import { Proj3Component } from './projects/proj3/proj3.component';
import { Proj4Component } from './projects/proj4/proj4.component';
import { Proj5Component } from './projects/proj5/proj5.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'projects',component:ProjectListComponent
  },
  {
    path:'projects/proj1',component:Proj1Component
  },
  {
    path:'projects/proj2',component:Proj2Component
  },
  {
    path:'projects/proj3',component:Proj3Component
  },
  {
    path:'projects/proj4',component:Proj4Component
  },
  {
    path:'projects/proj5',component:Proj5Component

  },
  {
    path:'contactme',component:ContactMeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
