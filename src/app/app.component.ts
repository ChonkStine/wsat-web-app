import { query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsat-web-app';
  logo : string = "assets/images/bcsat-logo.png";
  searchIcon : string = "assets/images/search-icon.png";
  burger : string = "assets/images/burger-menu.png";
  
  side = document.querySelector('#sideNav');
  count: number = 2;

  show(){
    this.count++;
    if(this.count % 2 == 0){
      console.log("run");
    }
    else{
      console.log("test");
    }
  }//show end
}//export end