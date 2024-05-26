import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  
  showSuccessMessage: boolean = false;

  toggleSuccessMessage() {

    this.showSuccessMessage = !this.showSuccessMessage;
  }
}
