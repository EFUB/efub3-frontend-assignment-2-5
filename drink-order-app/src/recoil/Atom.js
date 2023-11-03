import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const CartItemAtom = atom({
  key: "CartItemAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
