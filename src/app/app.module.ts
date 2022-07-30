import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppCreateTaskComponent } from './app-create-task/app-create-task.component';
import { AppShowTasksComponent } from './app-show-tasks/app-show-tasks.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { DataListComponent } from './data-list/data-list.component';
import { AppCreateProjectComponent } from './app-create-project/app-create-project.component';
import { AppCreateComponent } from './app-create/app-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    AppCreateTaskComponent,
    AppShowTasksComponent,
    AppDashboardComponent,
    ButtonComponent,
    IconComponent,
    DataListComponent,
    AppCreateProjectComponent,
    AppCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
