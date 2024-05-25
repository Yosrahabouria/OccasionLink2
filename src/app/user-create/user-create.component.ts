import { Component } from "@angular/core";

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  showSuccessMessage: boolean = false;

  model: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subscribe: false
  };

  constructor() {}

  onSubmit() {
    this.showSuccessMessage = true;
    console.log('User created successfully', this.model);
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}
