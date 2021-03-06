import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipeHomeComponent } from './components/recipe-home/recipe-home.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CanEditRecipeGuard } from 'src/app/core/guards/can-edit-recipe.guard';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', component: RecipeHomeComponent },
      { path: 'add-recipe', component: AddRecipeComponent },
      { path: 'edit-recipe/:id', component: EditRecipeComponent, canActivate: [CanEditRecipeGuard] },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
