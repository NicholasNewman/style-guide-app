import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  tabs: Tabs [] = [
    {id: 1, displayName: ' Home ', toolTip: '', display: true, order: 1, area: 'home', etc: '', href: '/',
    active: true, icon: 'fas fa-home'},
    {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'foundation', etc: '', href: '/color-palette',
    active: false, icon: 'fas fa-palette'},
    {id: 3, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'foundation', etc: '', href: 'typography',
    active: false, icon: 'fas fa-font'},
    {id: 4, displayName: 'Forms', toolTip: 'test', display: true, order: 4, area: 'foundation', etc: '', href: 'forms',
    active: false, icon: 'far fa-newspaper'},
    {id: 5, displayName: 'Buttons', toolTip: 'test', display: true, order: 5, area: 'foundation', etc: '', href: 'buttons',
    active: false, icon: 'fas fa-mouse'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
  }
}
