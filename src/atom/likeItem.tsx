import { atom } from "recoil";
import { OneBookType } from "../type/BookType";

export const LikeItemAtom = atom<OneBookType[]>({
  key: "LikeItem",
  default: [],
});
