import { createSlice } from '@reduxjs/toolkit';
import { DiaryState } from './type';

const setDateInfo = () => {
  const now = new Date();
  const year = now.getFullYear();
  const mon = now.getMonth() + 1;
  const day = now.getDate();
  return year.toString() + '.' + mon.toString() + '.' + day.toString();
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: { diaryList: [] as DiaryState[] },
  reducers: {
    add: (state, action) => {
      const newDiary: DiaryState = {
        id: Date.now(),
        date: setDateInfo(),
        content: action.payload,
      };
      state.diaryList.push(newDiary);
    },
    delete: (state, action) => {
      console.log(action.payload);
      state.diaryList = state.diaryList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default diarySlice;
