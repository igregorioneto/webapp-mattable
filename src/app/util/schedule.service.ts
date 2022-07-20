import { EventEmitter, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource!: MatTableDataSource<Schedule>;

  constructor() { 
    this.dataSource = new MatTableDataSource([...ELEMENT_DATA]);
  }

  add(schedule: Schedule) {
    const { name, phone } = schedule;
    const id = Number(this.dataSource.data[this.dataSource.data.length - 1].id) + 1;
    this.dataSource.data.push({
      id,
      name,
      phone
    });
  }

  edit(schedule: Schedule) {
    const { id, name, phone } = schedule;
    this.remove(schedule);
    this.dataSource.data.push({
      id,
      name,
      phone
    });
  }

  get() {
    return this.dataSource.data;
  }

  filter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  remove(schedule: Schedule) {
    const index = this.dataSource.data.findIndex(value => value === schedule);
    this.dataSource.data.splice(index, 1);
  }

  removeFromBottomToTop() {
    this.dataSource.data.pop();
  }
}
