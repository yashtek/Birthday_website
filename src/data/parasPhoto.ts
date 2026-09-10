import paras2 from "../assets/paras2.jpeg";
import paras3 from "../assets/paras3.jpeg";
import paras4 from "../assets/paras4.jpeg";
import paras5 from "../assets/paras5.jpeg";
import paras6 from "../assets/paras6.jpeg";
import paras9 from "../assets/paras9.jpeg";
import paras10 from "../assets/paras10.jpeg";
import paras11 from "../assets/paras11.jpeg";
import paras12 from "../assets/paras12.jpeg";
import paras13 from "../assets/paras13.jpeg";
import paras15 from "../assets/paras15.jpeg";

export interface TrailPhoto {
  id: number;
  src: string;
  caption: string;
}

const GALLERY_ASSETS = [
  paras2,
  paras3,
  paras4,
  paras5,
  paras6,
  paras9,
  paras10,
  paras11,
  paras12,
  paras13,
  paras15,
  paras2,
  paras3,
];

export const TRAIL_PHOTOS: TrailPhoto[] = [
  { id: 2, caption: "The Debut" },
  { id: 3, caption: "Blockbuster Look" },
  { id: 4, caption: "Red Carpet Ready" },
  { id: 5, caption: "Critics' Choice" },
  { id: 6, caption: "Fan Favorite" },
  { id: 7, caption: "Box Office King" },
  { id: 8, caption: "Director's Cut" },
  { id: 9, caption: "Signature Style" },
  { id: 10, caption: "Legend in the Making" },
  { id: 11, caption: "Lights, Camera, Paras" },
  { id: 12, caption: "The Encore" },
  { id: 13, caption: "Forever a Star" },
  { id: 15, caption: "The Final Premiere" },
].map((photo, index) => ({
  ...photo,
  src: GALLERY_ASSETS[index]!,
}));
