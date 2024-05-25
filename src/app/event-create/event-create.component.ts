import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-create',
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

  selectedEvent!: string;
  numberOfPeople!: number;
  selectedLocation!: string;
  selectedDate: Date= new Date();
  events = [{value: 'option1', label: 'Professional Meeting'}, {value: 'option2', label: 'Sex Gender Reveal'}, {value: 'option3', label: 'Anniversary'}];
  locations = [{value: '1', label: 'Tunis'}, {value: '2', label: 'La Marsa'}, {value: '3', label: 'Sidi Bousaid'}];
  
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
