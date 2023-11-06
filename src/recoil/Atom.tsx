import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "schedule",
  storage: localStorage,
});

const scheduleState = atom({
  key: "schedule",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const selectedDateState = atom({
  key: "selectedDate",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export { scheduleState, selectedDateState };
