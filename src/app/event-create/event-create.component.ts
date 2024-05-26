import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  eventForm: FormGroup;
  events = [
    {value: 'option1', label: 'Professional Meeting'}, 
    {value: 'option2', label: 'Gender Reveal'}, 
    {value: 'option3', label: 'Anniversary'}
  ];
  locations = [
    {value: '1', label: 'Tunis'}, 
    {value: '2', label: 'La Marsa'}, 
    {value: '3', label: 'Sidi Bousaid'}
  ];

  constructor() {
    this.eventForm = new FormGroup({
      eventType: new FormControl(''),
      numberOfPeople: new FormControl(''),
      location: new FormControl(''),
      selectedDate: new FormControl('')
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.eventForm.valid) {
      const eventType = this.eventForm.value.eventType;
      const numberOfPeople = this.eventForm.value.numberOfPeople;
      const location = this.eventForm.value.location;
      const selectedDate = this.eventForm.value.selectedDate;

      alert(`Event Created Successfully!\n` +
        `Event Type: ${eventType}\n` +
        `Number of People: ${numberOfPeople}\n` +
        `Location: ${location}\n` +
        `Date: ${selectedDate}`);
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
