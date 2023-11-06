import { atom } from "recoil";
import { ImageInfo } from "../../CommonTypes";

export const ImgAtom = atom({
  key: "ImgAtom",
  default: [] as ImageInfo[], // 초기값은 빈 배열
});
