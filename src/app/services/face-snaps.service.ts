import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Ma description',
      createdDate: new Date(),
      snaps: 300,
      imageUrl:
        'https://www.santevet.com/upload/admin/images/article/Chat%202/portrait_chat/les_5_sens_du_chat.jpg',
      isSnapped: false,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Titi',
      description: 'Toto',
      createdDate: new Date(),
      snaps: 150,
      imageUrl:
        'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg',
      isSnapped: false,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );

    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    if (snapType === 'snap') {
      faceSnap.snaps++;
      faceSnap.isSnapped = true;
    } else {
      faceSnap.snaps--;
      faceSnap.isSnapped = false;
    }
  }
}
