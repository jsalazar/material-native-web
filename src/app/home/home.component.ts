import { Component, OnInit } from '@angular/core';
import { ripple } from 'material-components-web';
import { iconButton } from 'material-components-web';
import { chips } from 'material-components-web';
import { dialog } from 'material-components-web';
import { list } from 'material-components-web';
import { autoInit } from 'material-components-web';
import { menu } from 'material-components-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const btnRipples = Array.from(document.querySelectorAll('.mdc-button'))
      .map(element => new ripple.MDCRipple(element));

    // for a single element  
    // const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
    
    // for all elements on a page
    const fabRipples = Array.from(document.querySelectorAll('.mdc-fab'))
      .map(element => new ripple.MDCRipple(element));

    const cardActionRipple = new ripple.MDCRipple(document.querySelector('.mdc-card__primary-action'));

    const toggleFav = document.querySelector('#add-to-favorites');
    const toggleIconRipple = new ripple.MDCRipple(toggleFav);
          toggleIconRipple.unbounded = true;
    const toggleButton = new iconButton.MDCIconButtonToggle(toggleFav);
    
    const chipSetEl = document.querySelector('.mdc-chip-set');
    const chipSet = new chips.MDCChipSet(chipSetEl);
    


    const dialogz = new dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    const listz = new list.MDCList(document.querySelector('.mdc-list'));

    dialogz.listen('MDCDialog:opened', () => {
      listz.layout();
    });


    const alertDialogBtn = document.querySelector('#alert-dialog');
      alertDialogBtn.addEventListener('click', function() {
        console.log('i have been clicked ' + Math.random());
        dialogz.open();
      }, false);



    // add event listener to button
    // onclick add mdc-menu-surface--open to mdc-menu-surface >> menu
    // add selected or focused to fist menu item
    
    const anchorMenu = new menu.MDCMenu(document.querySelector('.mdc-menu'));

    anchorMenu.open = false;
    
    const anchorMenuBtnToggle = document.querySelector('#mdc-menu--button-toggle');
          anchorMenuBtnToggle.addEventListener('click', function() {
            console.log('i am open');
            console.log(anchorMenu.open);
            anchorMenu.open = !anchorMenu.open;
            console.log(anchorMenu.open +''+ Math.random());
            
          }, false);





      autoInit();

  }

}
