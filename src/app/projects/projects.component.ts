import { Component, OnInit,ChangeDetectorRef,NgZone,ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation,Autoplay } from "swiper";

SwiperCore.use([Autoplay,Navigation]);


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss','./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  proj_name = ["Maze solver","Startup base","RC Aircraft (SAE West)","HCI","blinky"]
  image = ["https://thumbs.dreamstime.com/b/retro-robot-portrait-retro-robot-portrait-pop-art-vector-illustration-vintage-kitsch-139690803.jpg",
          "https://thumbs.dreamstime.com/b/vector-cartoon-illustration-woman-reading-textbook-woman-reading-textbook-115866270.jpg",
          "https://thumbs.dreamstime.com/b/d-rendering-rc-airplane-isolated-colored-background-164609960.jpg",
          "https://media.istockphoto.com/vectors/hands-of-robot-and-human-touching-illustration-vector-vector-id1051821596?k=20&m=1051821596&s=612x612&w=0&h=Y6bFt-fnW3uozod2fpXOz1Fext7ovu8bYnLryZX0nFU=",
          "https://cdn11.bigcommerce.com/s-x49po/images/stencil/original/products/80791/128163/1643451725742_IMG-3128__1___03316.1643795465.jpg?c=2",         
          ]
  routerRoutes = [
    "proj4","proj1","proj2","proj5","proj3"
  ];
  
 
  constructor(private cd:ChangeDetectorRef,
    private ngZone:NgZone) { 
    
  }
  ngOnInit(): void {
  }


  

}
