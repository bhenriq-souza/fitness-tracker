import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';
import { TrainingService, IExercise } from '../../../_core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() onTrainingExit: EventEmitter<any> = new EventEmitter();
  private runningExercise: IExercise;
  progress: number = 0;
  timer: number;

  constructor(
    private dialog: MatDialog, 
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.runningExercise = this.trainingService.getRunningExercise();
    this.onStartOrResumeTimer();
  }

  onStartOrResumeTimer() {
    const steps = (this.runningExercise.duration / 100) * 1000;
    this.timer = window.setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) clearInterval(this.timer);
    }, steps);
  }

  onStop() {
    let dialogRef: MatDialogRef<any>;
    
    // clear the current timer
    clearInterval(this.timer);
    
    // open the confirmation dialog, passing data to this
    dialogRef = this.dialog.open(StopTrainingDialogComponent, {
      width: '300px',
      data: { progress: this.progress }
    });

    // implements the action after closing the dialog
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onTrainingExit.emit()
      } else {
        this.onStartOrResumeTimer();
      }
    });
  }
}
