import { Component, OnInit } from '@angular/core';
import { ProjectType } from 'src/types';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.less']
})
export class AppSidebarComponent implements OnInit {

  typeButton: string = 'circle';
  typeIconButton: string = 'add';
  cols = 2
  dataList = [
    {title: 'Primeiro Projeto', icons: ['delete']},
    {title: 'Segundo  Projeto', icons: ['delete']}
  ];


  constructor( private projects: ProjectService) { }

  setDataList (data: ProjectType[]) {
    const icons = ['delete']
    this.dataList = data.map( item => {
      return { ...item, icons }
    })

  }

    ngOnInit(): void {
      this.projects.get()
      .subscribe(data => this.setDataList(data))
  }

}
