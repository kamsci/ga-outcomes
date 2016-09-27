import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { AdminDashComponent } from './dashboard/adminDash.component';
import { FooterComponent } from './footer.component';
import { StudentListComponent } from './dashboard/student-list/student-list.component';
import { DeliverableReviewComponent } from './dashboard/deliverable-review/deliverable-review.component';
import { DeliverableDueComponent } from './dashboard/deliverable-due/deliverable-due.component';
import { ManagementComponent } from './management/management.component';
import { StudentsManageComponent } from './management/students-manage/students-manage.component';
import { DeliverablesManageComponent } from './management/deliverables-manage/deliverables-manage.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminDashComponent,
    StudentListComponent,
    DeliverableReviewComponent,
    DeliverableDueComponent,
    ManagementComponent,
    StudentsManageComponent,
    DeliverablesManageComponent
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
