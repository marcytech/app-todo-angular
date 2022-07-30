import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './app-create.component.html',
  styleUrls: ['./app-create.component.less']
})
export class AppCreateComponent implements OnInit {

  @Output() onCreate = new EventEmitter<string>();

  data = ''
  inputIsEmpty = true


  constructor( private router: Router) { }

  sendValue() {

    this.onCreate.emit(this.data)
  }
  cancel () {
    this.router.navigateByUrl('')
  }

  setInputIsEmpty () {
    const hasCharLength = 1
    this.inputIsEmpty = this.data.length < hasCharLength
  }

  ngOnInit(): void {
  }

}
