import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembersHomeComponent } from './components/members-home/members-home.component'
import { MembersListComponent } from './components/members-list/members-list.component'
import { StudentsListComponent } from './components/students-list/students-list.component'
import { TestsListComponent } from './components/tests-list/tests-list.component'
const membersRoutes: Routes = [
 {
  path: 'members',
  component: MembersHomeComponent,
  children: [{
    path: 'list',
    component: MembersListComponent
  },
    {
    path: 'students',
    component: StudentsListComponent
  },{
    path: 'tests',
    component: TestsListComponent
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(
      membersRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MembersRoutingModule {}
