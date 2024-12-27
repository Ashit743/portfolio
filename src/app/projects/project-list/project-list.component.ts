import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css','./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: any = []
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('../../../assets/projects.json').subscribe({
      next: (response) => {
        this.projects = response;
        console.log(this.projects); // Logs the array of JSON objects
      },
      error: (err) => {
        console.error('Error fetching JSON file:', err);
      }
    });
  }

}
