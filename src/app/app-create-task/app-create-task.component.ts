import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.less']
})
export class AppCreateTaskComponent implements OnInit {

  constructor() { }

  createTask (value: string): void {
    console.log(value)
  }

  ngOnInit(): void {
  }

}
