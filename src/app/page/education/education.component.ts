import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLoading: boolean = true;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 1800); 
  }
}
