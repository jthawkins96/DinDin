import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './pages/group/group.component';
import { GroupHomeComponent } from './components/group-home/group-home.component';
import { AddGroupComponent } from './components/add-group/add-group.component';

const routes: Routes = [
  {
    path: 'groups',
    component: GroupComponent,
    children: [
      { path: '', component: GroupHomeComponent, pathMatch: 'full' },
      { path: 'add-group', component: AddGroupComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}