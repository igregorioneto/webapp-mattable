import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from './Schedule';

const ELEMENT_DATA: Schedule[] = [
  { id: 1, name: 'João Silva', phone: '8888-8888' },
  { id: 2, name: 'Maria Silva', phone: '8888-8888' },
  { id: 3, name: 'Lucas Silva', phone: '8888-8888' },
  { id: 4, name: 'José Silva', phone: '8888-8888' },
  { id: 5, name: 'Manuela Silva', phone: '8888-8888' },
];

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  static valuesSchedule: EventEmitter<boolean> = new EventEmitter<boolean>();
  static valuesEditSchedule: EventEmitter<Schedule> = new EventEmitter<Schedule>();

  dataSource = [...ELEMENT_DATA];

  constructor() { }

  add(schedule: Schedule) {
    const { name, phone } = schedule;
    const id = Number(this.dataSource[this.dataSource.length - 1].id) + 1;
    this.dataSource.push({
      id,
      name,
      phone
    });
  }

  edit(schedule: Schedule) {
    const { id, name, phone } = schedule;
    this.remove(schedule);
    this.dataSource.push({
      id,
      name,
      phone
    });
  }

  get() {
    return this.dataSource;
  }

  remove(schedule: Schedule) {
    const index = this.dataSource.findIndex(value => value === schedule);
    this.dataSource.splice(index, 1);
  }

  removeFromBottomToTop() {
    this.dataSource.pop();
  }
}
