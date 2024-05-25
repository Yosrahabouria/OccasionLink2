import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  model: any = {
    eventType: '',
    numberOfPeople: 0,
    location: '',
    date: ''
  };

  eventTypes: string[] = ['Professional Meeting', 'Gender Reveal', 'Anniversary'];
  locations: string[] = ['Tunis', 'La Marsa', 'Sidi Bousaid'];

  constructor() {}

  onSubmit(eventForm: any) {
    if (eventForm.valid) {
      const eventType = eventForm.value.eventType;
      const numberOfPeople = eventForm.value.numberOfPeople;
      const location = eventForm.value.location;

      alert(`Event Created Successfully!\n` +
        `Event Type: ${eventType}\n` +
        `Number of People: ${numberOfPeople}\n` +
        `Location: ${location}`);
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
