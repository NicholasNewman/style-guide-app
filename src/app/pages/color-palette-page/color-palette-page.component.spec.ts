import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalettePageComponent } from './color-palette-page.component';

describe('ColorPalettePageComponent', () => {
  let component: ColorPalettePageComponent;
  let fixture: ComponentFixture<ColorPalettePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPalettePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
