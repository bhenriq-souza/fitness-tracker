import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/*** App Material Module */
import { AppMaterialModule } from '../../app-material/app-material.module';

/** Routing Module */
import { TrainingRoutingModule } from './_routing/training.routing.module';

/** Module Components */
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training/training.component';
import { StopTrainingDialogComponent } from './current-training/stop-training-dialog/stop-training-dialog.component';

@NgModule({
  declarations: [
    CurrentTrainingComponent, 
    NewTrainingComponent, 
    PastTrainingsComponent, 
    TrainingComponent, 
    StopTrainingDialogComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    StopTrainingDialogComponent
  ]
})
export class TrainingModule { }
