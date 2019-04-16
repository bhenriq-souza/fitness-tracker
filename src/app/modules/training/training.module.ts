import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';

import { TrainingRoutingModule } from './_routing/training.routing.module';

@NgModule({
  declarations: [CurrentTrainingComponent, NewTrainingComponent, PastTrainingsComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
