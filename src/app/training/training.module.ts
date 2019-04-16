import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';

@NgModule({
  declarations: [CurrentTrainingComponent, NewTrainingComponent],
  imports: [
    CommonModule
  ]
})
export class TrainingModule { }
