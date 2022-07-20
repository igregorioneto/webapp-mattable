import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { ListComponent } from "./list/list.component";

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


const components = [
    FormComponent,
    ListComponent,
    HomeComponent
];
  
const modulesMaterial = [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HomeRoutingModule,
        ...modulesMaterial
    ]
})
export class HomeModule { }