import { Component, OnInit,Inject } from '@angular/core';
import * as AOS from 'aos';
import { DOCUMENT } from '@angular/common';

declare function working():any

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.css']
})
export class EduExpComponent implements OnInit {

  SchoolDescription = 
  ["Completed my Grade X State,with Math,Science,Social Studies, English, Hindi and Kannada in Sai Niketan",
  "",
  ""]
  Schoolimages = ["../../assets/images/school.png","../../assets/images/smallSchool.png","../../assets/images/university.png"]
  constructor() {   }

  ngOnInit(){


    

    working()
    AOS.init();
    
  }





}
