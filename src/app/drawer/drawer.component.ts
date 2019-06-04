import { Component, OnInit } from '@angular/core';

import { drawer } from 'material-components-web';
import { topAppBar } from 'material-components-web';
import { ripple } from 'material-components-web';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement);  
    const drawerZ = drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    
    const topAppBarZ = topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));

          topAppBarZ.setScrollTarget(document.getElementById('main-content'));

          topAppBarZ.listen('MDCTopAppBar:nav', () => {
            drawerZ.open = !drawerZ.open;
            
          });
    
    const mdcNavLinks = [].map.call(document.querySelectorAll('.mdc-list-item'), function(element) {
      return new ripple.MDCRipple(element)
    });

    
  }

}
