import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Schedule } from 'src/app/util/Schedule';
import { ScheduleService } from '../../../util/schedule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'options'];
  dataSource: Schedule[] = [];

  @ViewChild(MatTable) table!: MatTable<Schedule>;

  constructor(private scheduleService: ScheduleService) {
  }
  
  ngOnInit(): void {
    this.dataSource = this.scheduleService.get();
    ScheduleService.valuesSchedule.subscribe((value: boolean) => {
      if(true) this.table.renderRows();
    });
  }

  deleteSchedule(schedule: Schedule) {
    this.scheduleService.remove(schedule);
    this.table.renderRows();
  }

  editSchedule(schedule: Schedule) {
    ScheduleService.valuesEditSchedule.emit(schedule);
  }

}
