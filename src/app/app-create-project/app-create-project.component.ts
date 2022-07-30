import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './app-create-project.component.html',
  styleUrls: ['./app-create-project.component.less']
})
export class AppCreateProjectComponent implements OnInit {

  constructor() { }

  createProject ( value: string ): void {
    console.log(value)
  }

  ngOnInit(): void {
  }

}
