import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpledropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.sass']
})
export class SimpleDropdownComponent {
  language: 'Nederland';
  langOptions: Array<Object> = [
    { lang: 'en', name: 'English'},
    { lang: 'nl', name: 'Nederland'},
    { lang: 'de', name: 'Deutsch'}
  ];

  constructor() { }

  public onChangedLanguague(): void {

  }

}
