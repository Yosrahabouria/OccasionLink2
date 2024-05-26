import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';



import { AppComponent } from './app.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserProfileComponent } from './user-profile/UserProfileComponent';
import { UserCreateComponent } from './user-create/user-create.component';
@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    UserCreateComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
