import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
//fire base

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
 
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
 
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { GestionClubComponent } from './gestion-club/gestion-club.component';
import { ClubService } from 'app/cervices/club.service';
import { AddClubComponent } from './add-club/add-club.component';
import { SettingsService } from 'app/cervices/settings.service';

import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
 
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './cervices/auth.service';
//import { AuthGuard } from './guards/auth.gurads';
//import { RegisterGuard } from './guards/register.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyAAxcxoBpvef_qgR2xXvDAxqcR502BYWgU",
  authDomain: "clubs-16594.firebaseapp.com",
  databaseURL: "https://clubs-16594.firebaseio.com",
  storageBucket: "clubs-16594.appspot.com",
  messagingSenderId: "308911584839"
 
 }
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GestionClubComponent,     
    AddClubComponent,
 
     ClubDetailComponent,
 
     EditClubComponent,
 
     LoginComponent,
 
     RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FlashMessagesModule, 
    FixedPluginModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [
    AngularFireDatabase,
   ClubService,
   SettingsService,
   AngularFireAuth,
   //AuthGuard,
   //RegisterGuard,
   AuthService,
 
   
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
