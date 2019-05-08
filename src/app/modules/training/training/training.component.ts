import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from '../../../_core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onGoingTraining: Boolean = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged
      .subscribe(exercise => exercise ? this.onGoingTraining = true : this.onGoingTraining = false);
  }
}
