import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { GestionClubComponent }   from './gestion-club/gestion-club.component';
import { AddClubComponent }   from './add-club/add-club.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
 
import { EditClubComponent } from './edit-club/edit-club.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
 
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
 

    {
        path: 'gestionClub',
        component: GestionClubComponent , 
    },
    {
        path: 'addClub',
        component: AddClubComponent, 
    },
    {
        path: 'clubDetail/:id',
        component: ClubDetailComponent
    },
    {
        path: 'editClub/:id',
        component: EditClubComponent
    },
    {
        path: 'login/:id',
        component: LoginComponent
    },
    {
        path: 'register/:id',
        component: RegisterComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
