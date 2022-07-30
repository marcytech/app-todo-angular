import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCreateProjectComponent } from './app-create-project/app-create-project.component';
import { AppCreateTaskComponent } from './app-create-task/app-create-task.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'create-project', component: AppCreateProjectComponent },
  { path: 'create-task', component: AppCreateTaskComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
