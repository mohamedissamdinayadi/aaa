import { Component } from '@angular/core';
import { SidebarService } from './cervices/sidebar.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private sidebarService: SidebarService){
    
  }

}
