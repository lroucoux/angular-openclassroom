import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onClickSnap() {
    if (this.faceSnap.isSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
