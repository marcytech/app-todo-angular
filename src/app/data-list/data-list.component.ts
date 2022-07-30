import { Component, OnInit, Input} from '@angular/core';
import { dataType } from 'src/types';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less']
})
export class DataListComponent implements OnInit {

  @Input() data: Array<dataType> = []
  @Input() cols: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
