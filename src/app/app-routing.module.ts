import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScalesComponent } from './components/scales/scales.component';
import { CurrentScaleComponent } from './components/current-scale/current-scale.component';
import { JudjesComponent } from './components/judjes/judjes.component';
import { MatchesComponent } from './components/matches/matches.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/scales',
    pathMatch: 'full'
  },
  { path: 'scales', component: ScalesComponent },
  { path: 'scale/:id', component: CurrentScaleComponent },    
  { path: 'judjes', component: JudjesComponent },  
  { path: 'matches', component: MatchesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
