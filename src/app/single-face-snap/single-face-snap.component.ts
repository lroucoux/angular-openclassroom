import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onClickSnap(faceSnapId: number, isSnapped: boolean) {
    if (isSnapped) {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(
        faceSnapId,
        'unsnap'
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(
        faceSnapId,
        'snap'
      );
    }
  }
}
