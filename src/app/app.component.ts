import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { EventCreateComponent } from './event-create/event-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserProfileComponent } from './user-profile/UserProfileComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'My Angular App';

  greetUser(name: string) {
    alert(`Hello, ${name}! Welcome to my Angular App.`);
  }
}

@NgModule({
  declarations: [EventCreateComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, RouterModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

