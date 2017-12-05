import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
 
 
import { FlashMessagesService } from 'angular2-flash-messages';
 
import { AuthService } from '../../cervices/auth.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;

    isLoggedIn:boolean;
    loggedInUser:string;
    showRegister:boolean;
  
  
    @ViewChild("navbar-cmp") button;

    constructor(location:Location, private renderer : Renderer, private element : ElementRef,
        private authService:AuthService,
        private router:Router,
        private flashMessagesService: FlashMessagesService,
             )         {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    
        this.authService.getAuth().subscribe(auth=>{
            if (auth){
              this.isLoggedIn=true;
              this.loggedInUser=auth.email;
      
            }else{
              this.isLoggedIn=false;
            }
           });
    
    
    
    
    }
    getTitle(){
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    onLogoutClick(){
        this.authService.logout();
        this.flashMessagesService.show('you are logged out', {cssClass:'alert-success', timeout : 4000 }) ;
        this.router.navigate(['/login']); 
      }
    
}
