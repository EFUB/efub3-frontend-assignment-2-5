import { atom, selector } from "recoil";

export const DiaryItemAtom = atom({
  key: "DiaryItemAtom",
  default: [] as DiaryType[],
});

export const CountSelector = selector({
  key: "CountSelector",
  get: ({ get }) => {
    const diaryItems = get(DiaryItemAtom);
    return diaryItems.length; // 다이어리 아이템의 개수를 반환
  },
});

export const MoodSelector = selector({
  key: "MoodSelector",
  get: ({ get }) => {
    const diaryItems = get(DiaryItemAtom);
    const moodSum = diaryItems.reduce((acc, cur) => acc + cur.mood, 0);
    return moodSum;
  },
});
