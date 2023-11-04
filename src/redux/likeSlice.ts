import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// PayloadAction = action.payload 필드의 타입을 지정할 수 있게 해주는 제네릭

// 아이템의 타입 정의
export interface LikeItemState {
  id: number;
  title: string;
  image: string; // 이미지 URL은 문자열(string)로 정의
  price: number;
  quantity?: number;
}

// 초기값 상태 정의 (LikeItemState 객체로 이루어진 배열 형태)
const initialState: LikeItemState[] = [];

const likeSlice = createSlice({
  name: "likeSlice",
  initialState,
  reducers: {
    likeItem: (state, action: PayloadAction<LikeItemState>) => {
      // 좋아요 목록에 아이템을 추가하는 로직
      state.push(action.payload);
    },
    unLikeItem: (state, action: PayloadAction<number>) => {
      // 좋아요 목록에서 아이템을 제거하는 로직
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { likeItem, unLikeItem } = likeSlice.actions;

export default likeSlice;
