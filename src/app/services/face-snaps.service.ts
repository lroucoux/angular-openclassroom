import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'snap' | 'unsnap'
  ): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1),
        isSnapped: snapType === 'snap' ? true : false,
      })),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap
        )
      )
    );
  }

  addFaceSnap(snapForm: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map((snapList) => Math.max(...snapList.map((fs) => fs.id)) + 1),
      map((newId) => ({
        ...snapForm,
        createdDate: new Date(),
        id: newId,
        snaps: 0,
        isSnapped: false,
      })),
      switchMap((newFaceSnap) =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap)
      )
    );
  }
}
