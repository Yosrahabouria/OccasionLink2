import { Component } from "@angular/core";

@Component({
  selector: 'event-create',
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
    constructor() {}
    
    eventTypes: string[] = ['Professional Meeting', 'Gender Reveal', 'Anniversary'];
    locations: string[] = ['Tunis', 'La Marsa', 'Sidi Bousaid'];

 }

