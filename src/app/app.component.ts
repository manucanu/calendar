import { Component, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { addDays, startOfDay, subDays } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeDayIsOpen: boolean | undefined;
  handleEvent(arg0: string, event: CalendarEvent<any>) {
    throw new Error('Method not implemented.');
  }
  viewDate : Date = new Date();
  view : CalendarView = CalendarView.Month;
  calendarView = CalendarView;
  title = 'calendar';
  modalData:{
    action: string;
    event: CalendarEvent;
  } | undefined
  setView(view: CalendarView) {
    this.view = view;
  };
  actions: CalendarEventAction[] =[
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  refresh:Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays( startOfDay(new Date()),1),
      end: addDays(new Date(), 1),
      title:'School final exams',
      actions:this.actions,
      allDay:true,
      resizable:{
        beforeStart:true,
        afterEnd:true,
      }
    },
    {
      start: startOfDay(new Date()),
      title: 'Intership today',
    }
  ]}