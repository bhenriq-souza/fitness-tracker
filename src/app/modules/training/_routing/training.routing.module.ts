import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { TRAINING_ROUTING } from './training.routing';

@NgModule({
  imports: [RouterModule.forChild(TRAINING_ROUTING)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }