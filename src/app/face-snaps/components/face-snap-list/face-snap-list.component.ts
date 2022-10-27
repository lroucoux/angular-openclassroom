import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import {
  concatMap,
  mergeMap,
  delay,
  exhaustMap,
  map,
  switchMap,
  take,
  tap,
  takeUntil,
} from 'rxjs/operators';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  private destroy$!: Subject<boolean>;
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(takeUntil(this.destroy$), tap(console.log)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
