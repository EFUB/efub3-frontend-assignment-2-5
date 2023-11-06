import { atom, selector } from "recoil";

// 북마크 도서
const BookMarkAtom = atom({
  key: "BookMarkAtom",
  default: [] as BookType[],
});

// 북마크 도서 개수
const TotalBookSelector = selector({
  key: "TotalBookSelector",
  get: ({ get }) => {
    const BookItems = get(BookMarkAtom);
    return BookItems.length;
  },
});

export { BookMarkAtom, TotalBookSelector };
