import { Component, OnInit } from '@angular/core';
import { PrimaryColorPalette } from '../../models/tabs-content/primary-color-palette.model'

@Component({
  templateUrl: './color-palette-page.component.html',
  styleUrls: ['./color-palette-page.component.scss']
})
export class ColorPalettePageComponent implements OnInit {

  primaryColorPalettes: PrimaryColorPalette[] = [
    {id: 1, displayName: 'Deep Navy', color: '#005581', subContentHeader: 'Usage ',
    subContent: 'Buttons, Headers, Labels', toolTip: '', display: true, order: 1,
    area: 'primary-color-palette', etc: ''
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
