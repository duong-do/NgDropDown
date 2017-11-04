import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-dropdown',
  templateUrl: './image-dropdown.component.html',
  styleUrls: ['./image-dropdown.component.sass']
})
export class ImageDropdownComponent implements OnInit {
  language = 'nl';
  languageOptions = ['en', 'nl', 'de'];

  constructor() { }

  ngOnInit() {
  }

  public setLanguage(language: string): void {
    this.language = language;
  }
}
