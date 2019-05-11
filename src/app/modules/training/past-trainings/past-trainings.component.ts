import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { TrainingService, IExercise } from '../../../_core';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  private storedExercises: IExercise[];
  private dataSource: MatTableDataSource<IExercise> = new MatTableDataSource<IExercise>();
  private displayedColumns: string[] = ['date', 'name', 'calories', 'duration', 'state'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService ) { }

  async ngOnInit() {
    this.storedExercises = await this.trainingService.getStoredExercises();
    this.dataSource.data = this.storedExercises;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
