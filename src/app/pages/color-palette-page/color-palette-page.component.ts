import { Component, OnInit } from '@angular/core';
import { PrimaryColorPalette } from '../../models/tabs-content/primary-color-palette.model';
import { SecondaryColorPalette } from '../../models/tabs-content/secondary-color-palette.model';

@Component({
  templateUrl: './color-palette-page.component.html',
  styleUrls: ['./color-palette-page.component.scss']
})
export class ColorPalettePageComponent implements OnInit {

  copiedColorHex: string;

  primaryColorPalettes: PrimaryColorPalette[] = [
    {id: 1, displayName: 'Dark Cerulean', color: '#005581', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Buttons, Headers, Labels', toolTip: '', display: true, order: 1,
      area: 'primary-color-palette', etc: ''
    },
    {id: 2, displayName: 'Pacific Blue', color: '#0085ca', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Active indicator, link', toolTip: '', display: true, order: 2,
      area: 'primary-color-palette', etc: ''
    },
    {id: 3, displayName: 'Denim', color: '#2655e2', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Watch item or related', toolTip: '', display: true, order: 3,
      area: 'primary-color-palette', etc: ''
    },
    {id: 4, displayName: 'Royal Blue', color: '#4169e1', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Active indicator, highlight ', toolTip: '', display: true, order: 4,
      area: 'primary-color-palette', etc: ''
    },
    {id: 5, displayName: 'Bright Orange', color: '#de632d', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'To Do item or related', toolTip: '', display: true, order: 5,
      area: 'primary-color-palette', etc: ''
    },
    {id: 6, displayName: 'Gainsboro', color: '#dcdcdc', textColor: 'black', subContentHeader: 'Usage ',
      subContent: 'Dark border', toolTip: '', display: true, order: 6,
      area: 'primary-color-palette', etc: ''
    },
    {id: 7, displayName: 'Light Grayish Blue', color: '#f8f9fa', textColor: 'black', subContentHeader: 'Usage ',
      subContent: 'Light border, content bg', toolTip: '', display: true, order: 7,
      area: 'primary-color-palette', etc: ''
  },
    {id: 8, displayName: 'White', color: '#ffff', textColor: 'black', subContentHeader: 'Usage ',
      subContent: 'Page bg', toolTip: '', display: true, order: 8,
      area: 'primary-color-palette', etc: ''
    }
  ];

  secondaryColorPalette: SecondaryColorPalette[] = [
    {id: 1, displayName: 'Radical Red', color: '#f83753', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Access related content', toolTip: '', display: true, order: 1,
      area: 'primary-color-palette', etc: ''
    },
    {id: 2, displayName: 'Orange Red', color: '#ff4500', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Security related content', toolTip: '', display: true, order: 2,
      area: 'secondary-color-palette', etc: ''
    },
    {id: 3, displayName: 'Sandy Gold', color: '#eeb83d', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Career related content', toolTip: '', display: true, order: 3,
      area: 'secondary-color-palette', etc: ''
    },
    {id: 4, displayName: 'Bright Green', color: '#3adf7c', textColor: 'black', subContentHeader: 'Usage ',
      subContent: 'Purchase/payment related content', toolTip: '', display: true, order: 4,
      area: 'secondary-color-palette', etc: ''
    },
    {id: 5, displayName: 'Light Sea Green', color: '#20b2aa', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Inspect related content', toolTip: '', display: true, order: 5,
      area: 'secondary-color-palette', etc: ''
    },
    {id: 6, displayName: 'Dodger Blue', color: '#1e90ff ', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Investigation related content', toolTip: '', display: true, order: 6,
      area: 'secondary-color-palette', etc: ''
    },
    {id: 7, displayName: 'Royal Blue', color: '#4169e1', textColor: 'white', subContentHeader: 'Usage ',
      subContent: 'Active indicator, highlight ', toolTip: '', display: true, order: 7,
      area: 'secondary-color-palette', etc: ''
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // COPY COLOR TO USER CLIPBOARD
  copyHex(color: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = color;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copiedColorHex = color;
    setTimeout(() => {
      this.copiedColorHex = '';
    }, 2000);
  }
}
