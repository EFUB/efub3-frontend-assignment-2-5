import { atom } from "recoil";
interface IAtomMemoList {
  id: number;
  text: string;
}

export const memoListState = atom({
  key: "memoListState",
  default: [] as IAtomMemoList[],
});
