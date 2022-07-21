import { AfterViewInit, Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Schedule } from 'src/app/util/Schedule';
import { ScheduleService } from '../../../util/schedule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'options'];
  dataSource!: MatTableDataSource<Schedule>;

  @ViewChild(MatTable) table!: MatTable<Schedule>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private scheduleService: ScheduleService) {
  }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.scheduleService.get());
    ScheduleService.valuesSchedule.subscribe((value: boolean) => {
      if(true) this.table.renderRows();
    });
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteSchedule(schedule: Schedule) {
    this.scheduleService.remove(schedule);
    this.table.renderRows();
  }

  editSchedule(schedule: Schedule) {
    ScheduleService.valuesEditSchedule.emit(schedule);
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
