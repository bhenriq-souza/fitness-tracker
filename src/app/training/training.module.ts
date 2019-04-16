import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';

@NgModule({
  declarations: [CurrentTrainingComponent, NewTrainingComponent, PastTrainingsComponent],
  imports: [
    CommonModule
  ]
})
export class TrainingModule { }
