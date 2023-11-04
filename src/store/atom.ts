import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { defaultList } from "./_mock";
import { ListType } from "../types";

const { persistAtom } = recoilPersist();

export const listState = atom<ListType[]>({
	key: "list",
	default: defaultList,
	effects_UNSTABLE: [persistAtom],
});

export const bookmarkState = atom<number[]>({
	key: "bookmark",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const bookmarkListSelector = selector({
	key: "bookmarkListSelector",
	get: ({ get }) => {
		const list = get(listState);
		const bookmark = get(bookmarkState);
		return list.filter((item: ListType) => bookmark.includes(item.id));
	},
});

export const myListSelector = selector({
	key: "myListSelector",
	get: ({ get }) => {
		const list = get(listState);
		return list.filter((item: ListType) => item.author === "USER_ME");
	},
});
