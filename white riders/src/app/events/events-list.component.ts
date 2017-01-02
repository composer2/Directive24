import {
  Component, OnInit, ChangeDetectionStrategy, trigger,
  state, style, transition, animate, keyframes
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event, EventService } from './event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('focusSearchPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.04)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('note', [
      state('inactive', style({
        opacity: '0'
      })),
      state('active', style({
        opacity: '1',
      })),
      transition('inactive => active', [
        animate(600, keyframes([
          style({ opacity: '0', transform: 'translateY(0)', offset: '0' }),
          style({ opacity: '1', transform: 'translateY(-15px)', offset: '0.6' }),
          style({ opacity: '1', transform: 'translateY(0)', offset: '1' })
        ]))
      ]),
      transition('active => inactive', [
        animate(600, keyframes([
          style({ opacity: '1', transform: 'translateY(0)', offset: '0' }),
          style({ opacity: '1', transform: 'translateY(-15px)', offset: '0.7' }),
          style({ opacity: '0', transform: 'translateY(100%)', offset: '1' })
        ]))
      ])
    ])
  ]


})
export class EventListComponent implements OnInit {
  focusSearchState: string = 'inactive';
  events: Event[];
  values = '';
  admin: boolean;
  editSingleEvent: boolean;
  deleteSingleEvent: boolean;
  addNewEvent: boolean;
  newEventData: Event;
  // important after you have the event by id filter all events 
  // and find the event and push it to a single event array which later
  // is going to the server as PUT 
  editedEvent: Event;
  deleteEditEventById: number;
  submitted = false;
  newEventForm = false;
  experiment: Event;
  constructor(private eventService: EventService) { }
  // search animation
  changeFocusSearchState() {
    this.focusSearchState = (this.focusSearchState === 'inactive' ? 'active' : 'inactive');
  }
  // search animation
  // add new event
  addEvent() {
    this.addNewEvent = true;

    this.newEventData = {
      _id: '',
      day: null,
      month: '',
      name: '',
      picture: '',
      shortDescription: '',
      website: ''
    };
  }
  cancelAddEvent() {
    this.addNewEvent = false;
  }
  onSubmit2() { this.newEventForm = !this.newEventForm; };
  submitNewEvent2() {
    // submit the event to the array and to the server
    let event = {
      day: this.newEventData.day,
      month: this.newEventData.month,
      name: this.newEventData.name,
      picture: this.newEventData.picture,
      shortDescription: this.newEventData.shortDescription,
      website: this.newEventData.website
    };
    this.eventService.addEvent(event)
      .subscribe(addData => {
        this.experiment = addData;
        this.events.unshift(this.experiment);
      });
    this.newEventForm = !this.newEventForm;
    this.addNewEvent = false;

  }
  cancelEditing2() {
    this.newEventForm = !this.newEventForm;
    this.addNewEvent = false;
  }
  // add new event


  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values);
  }
  //  start edit event
  editEvent(event) {
    this.editSingleEvent = true;
    this.deleteEditEventById = event.target.parentNode.id;
    this.editedEvent = JSON.parse(JSON.stringify(this.events[+this.deleteEditEventById]));
  }
  submitEditedEvent() {
    this.events[this.deleteEditEventById] = this.editedEvent;
    let data = {
      day: this.editedEvent.day,
      month: this.editedEvent.month,
      name: this.editedEvent.name,
      picture: this.editedEvent.picture,
      shortDescription: this.editedEvent.shortDescription,
      website: this.editedEvent.website
    };

    this.eventService.updateEvent(this.editedEvent._id, data)
      .subscribe(update => console.log(update));
    this.submitted = !this.submitted;
    this.editSingleEvent = false;
    this.deleteEditEventById = -1;
  }
  cancelEditing() {
    // hide the edit html
    this.submitted = !this.submitted;
    this.editSingleEvent = false;
    this.deleteEditEventById = -1;
  }

  onSubmit() { this.submitted = !this.submitted; };
  // end edit event

  // start delete event
  deleteEvent(event) {
    this.deleteSingleEvent = true;
    this.deleteEditEventById = event.target.parentNode.id;
    this.editedEvent = JSON.parse(JSON.stringify(this.events[+this.deleteEditEventById]));
  }
  deleteEventConfirm() {
    // TODO delete the event by id from server DELETE 
    this.eventService.deleteEvent(this.editedEvent._id)
      .subscribe(data => console.log(data));

    // deleting the deletion hides the confirmation box
    this.events.splice(this.deleteEditEventById, 1);
    this.deleteSingleEvent = false;
    this.deleteEditEventById = -1;
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
