import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  tabs: Tabs [] = [
    {id: 1, displayName: 'test', toolTip: 'test', display: true, order: 1, area: 'foundation', etc: '', href: 'home',
    active: true, icon: 'fa-home'},
    {id: 2, displayName: 'test2', toolTip: 'test', display: true, order: 2, area: 'foundation', etc: '', href: 'buttons',
    active: false, icon: 'fa-user'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
    console.log('THE TAB IS ACTIVE');
    console.log(this.tabs);
  }

}
