import { Component, OnInit, Input} from '@angular/core';
import { dataType } from 'src/types';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './app-show-tasks.component.html',
  styleUrls: ['./app-show-tasks.component.less']
})
export class AppShowTasksComponent implements OnInit {

  @Input() data: Array<dataType> = []
  @Input() cols: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
