import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../../../util/schedule.service';
import { MatTable } from '@angular/material/table';
import { Schedule } from '../../../util/Schedule';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    id: [null], 
    name: ['', Validators.required],
    phone: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    ScheduleService.valuesEditSchedule.subscribe((value: Schedule) => {
      this.formGroup.setValue(value);
    });
  }

  savingData(): void {
    if(!this.formGroup.get('id')?.value) {
      this.scheduleService.add(
        this.formGroup.value
      );  
      this.formGroup.reset();    
      
    } else {
      this.scheduleService.edit(
        this.formGroup.value
      );
      this.formGroup.reset();
    }
    ScheduleService.valuesSchedule.emit(true);
  }

  clearData(): void {
    this.formGroup.reset();
  }

  removeFromBottomToTop() {
    this.scheduleService.removeFromBottomToTop();
    ScheduleService.valuesSchedule.emit(true);
  }

}
