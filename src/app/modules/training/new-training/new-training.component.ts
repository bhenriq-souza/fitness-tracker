import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { IExercise, TrainingService } from '../../../_core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart: EventEmitter<void> = new EventEmitter<void>();
  exercises: IExercise[] = [];

  constructor(private trainingService: TrainingService) { }

  async ngOnInit() {
    this.exercises = await this.trainingService.getAvailableExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

  onChangeExercise(value: any) {
    console.log(value);
  }

}
