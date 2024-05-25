import { Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserProfileComponent } from './user-profile/UserProfileComponent';

export const routes: Routes = [
    {path: 'event-create', component: EventCreateComponent},
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-create', component: UserCreateComponent },
    { path: '', redirectTo: 'user-profile', pathMatch: 'full'},
  
  ];