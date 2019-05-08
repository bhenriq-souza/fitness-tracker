import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IExercise, TrainingService } from '../../../_core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: IExercise[] = [];

  constructor(private trainingService: TrainingService) { }

  async ngOnInit() {
    this.exercises = await this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExercise(form.value.exercise);
  }
}
