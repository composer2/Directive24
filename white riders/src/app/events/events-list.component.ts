import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event, EventService } from './event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class EventListComponent implements OnInit {
  events: Event[];
  values = '';
  admin: boolean;
  editSingleEvent:boolean;
  deleteSingleEvent:boolean;
  // important after you have the event by id filter all events 
  // and find the event and push it to a single event array which later
  // is going to the server as PUT 
  editedEvent: Event;
  deleteEditEventById: string;
  submitted = false;
  constructor(private eventService: EventService) { }

  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values);
  }
  //  start edit event
  editEvent(event) {
    this.editSingleEvent = true;
    console.log(event);
  }
  submitEditedEvent() {
    // TODO send the event to the server : editedEvent
    // hide the edit html
    console.log(this.editedEvent);    
    this.editSingleEvent = false;
  }
  cancelEditing() {
    // hide the edit html
    this.editSingleEvent = false;
  }

  onSubmit() { this.submitted = !this.submitted; }
  // end edit event

  // start delete event
  deleteEvent(event) {
    this.deleteSingleEvent = true;
    // TODO asign event id
    this.deleteEditEventById = '';
    console.log(event);
  }
  deleteEventConfirm() {
    // TODO delete the event by id from server DELETE 
    // refresh the listed ones somehow

    // deleting the deletion hides the confirmation box
    this.deleteSingleEvent = false;
  }
  deleteEventCancel() {
    // cancel the deletion hides the confirmation box
    this.deleteSingleEvent = false;
  }
  // end delete event


  ngOnInit() {
    this.events = [];
    this.eventService.getEvents()
      .subscribe(event => {
        this.events = event;
        this.admin = false;
        this.editedEvent = this.events[0];
        this.editSingleEvent = false;
        this.deleteSingleEvent = false;
        if (localStorage['username'] === 'bob') {
          this.admin = true;
        }
        console.log(localStorage['username']);
        console.log(localStorage);
        console.log(this.events);
      });

  }
}
