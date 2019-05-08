import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

import { IExercise } from '../_models';

@Injectable()
export class TrainingService {
    exerciseChanged: Subject<IExercise> = new Subject<IExercise>();
    private runningExercise: IExercise;
    private storedExercises: IExercise[] = [];
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

    completeExercise(): void {
        this.storedExercises.push({
            ...this.runningExercise,
            date: new Date(),
            state: "completed"
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number): void {
        this.storedExercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.duration * (progress / 100),
            date: new Date(),
            state: "cancelled"
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
}