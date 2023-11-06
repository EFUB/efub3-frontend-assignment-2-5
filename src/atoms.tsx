import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type TodoItemType = {
  id: number;
  text: string;
  completed: boolean;
};

export const todoListState = atom<TodoItemType[]>({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const MemoState = atom({
  key: "MemoState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
