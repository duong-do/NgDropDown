import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.sass']
})
export class ButtonDropdownComponent implements OnInit {
  selected = 'Select language';

  langOptions: Array<Object> = [
    { lang: 'en', name: 'English'},
    { lang: 'nl', name: 'Nederland'},
    { lang: 'de', name: 'Deutsch'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public onChangeGender(language: string): void {
    this.selected = language;
  }
}
