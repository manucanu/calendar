import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

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
}
