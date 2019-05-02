import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() onTrainingExit: EventEmitter<any> = new EventEmitter();
  progress: number = 0;
  timer: number;

  constructor(private dialog: MatDialog ) { }

  ngOnInit() {
    this.onStartOrResumeTimer();
  }

  onStartOrResumeTimer() {
    this.timer = window.setInterval(() => { 
      this.progress += 20;
      if (this.progress >= 100) clearInterval(this.timer);
    }, 1000);
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
