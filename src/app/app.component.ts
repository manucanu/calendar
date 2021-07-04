import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewDate : Date = new Date();
  view : CalendarView = CalendarView.Month;
  calendarView = CalendarView;
  title = 'calendar';
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title:'An event organized by AVC'
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]
}
