import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserProfileComponent } from './user-profile/UserProfileComponent';
import { ProjectComponent } from './project/project.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [CalendarComponent],
  exports: [CalendarComponent], // Export CalendarComponent to make it available in other modules
  providers: [SharedService], // Include your shared service in the providers array
  imports: [CommonModule]
})
export class SharedService { }
