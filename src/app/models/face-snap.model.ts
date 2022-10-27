export class FaceSnap {
  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnapped!: boolean;
  location?: string;

  // Le fait d'ajouter public indique qu'on a une classe avec les attributs en parametres du constructeur
  // et que ces attributs sont initialisés dans le constructeur
  // constructor(
  //   public title: string,
  //   public description: string,
  //   public createdDate: Date,
  //   public snaps: number,
  //   public imageUrl: string,
  //   public isSnapped: boolean
  // ) {}
}
