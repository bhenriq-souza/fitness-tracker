import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

import { IExercise } from '../_models';

@Injectable()
export class TrainingService {
    exerciseChanged: Subject<IExercise> = new Subject<IExercise>();
    private runningExercise: IExercise;
    private availableExercises: IExercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    getAvailableExercises(): IExercise[] {
        return this.availableExercises.slice();
    }

    getRunningExercise(): IExercise {
        return { ...this.runningExercise };
    }

    startExercise(exerciseId: string): void {
        const selectedExercise = this.availableExercises.find(exerc => exerc.id === exerciseId);
        this.runningExercise = selectedExercise ? selectedExercise : null;
        this.exerciseChanged.next({ ...this.runningExercise });
    }
}