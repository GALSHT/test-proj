import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.navigationTranformation();
  }

  navigationTranformation(){
    let navigation = document.getElementsByClassName('navigation')[0];
    let navigationItems = Array.from(document.getElementsByClassName('navigation-item'));
    let homeContainer :HTMLElement = document.getElementsByClassName('home-container')[0] as HTMLElement;

    homeContainer.onscroll = function(){
      if(homeContainer.scrollTop != 0){
        navigation.classList.add('navigation--active')
        navigationItems.forEach(element => element.classList.add('navigation-item--active'));
      }else{
        navigation.classList.remove('navigation--active');
        navigationItems.forEach(element => element.classList.remove('navigation-item--active'));
      }
    }

    
  }

}
