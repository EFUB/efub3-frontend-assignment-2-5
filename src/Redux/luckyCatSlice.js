import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const asyncUpFetch = createAsyncThunk(
  'luckyCatSlice/asyncUpFetch',
  async () => {
    const OPEN_API_DOMAIN = 'https://cataas.com';
    const res = await fetch(`${OPEN_API_DOMAIN}/cat/says/Good Luck!?json=true`);
    const data = await res.json();
    return `${OPEN_API_DOMAIN}/${data.url}`;
  }
);

const luckyCatSlice = createSlice({
  name: 'luckyCat',
  initialState: { value: 0, status: '', catImage: '' },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = '로딩중...';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.status = '새로운 고양이와 만났어요!';
      state.catImage = action.payload;
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = '고양이를 찾지 못했어요...';
    });
  },
});

export default luckyCatSlice;
