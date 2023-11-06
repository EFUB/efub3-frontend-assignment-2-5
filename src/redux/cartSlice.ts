import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// PayloadAction = action.payload 필드의 타입을 지정할 수 있게 해주는 제네릭

// 아이템의 타입 정의
export interface CartItemState {
  id: number;
  title: string;
  image: string; // 이미지 URL은 문자열(string)로 정의
  price: number;
  quantity?: number;
}

// 초기값 상태 정의 (CartItemState 객체로 이루어진 배열 형태)
const initialState: CartItemState[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemState>) => {
      // 기존 목록에 해당 아이템이 있는지 확인
      const foundItem = state.find((item) => item.id === action.payload.id);
      if (foundItem) {
        // 있으면 수량만 증가
        foundItem.quantity = (foundItem.quantity || 0) + 1; // quantity 속성이 없을 경우 기본값 0을 사용
      } else {
        // 없으면 목록에 아이템 추가
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    subtractItem: (state, action: PayloadAction<CartItemState>) => {
      // 기존 목록에 해당 아이템이 있는지 확인
      const foundItem = state.find((item) => item.id === action.payload.id);
      // 아이템 수량 감소 로직
      if (foundItem) {
        if (foundItem.quantity && foundItem.quantity > 1) {
          // 수량이 2개 이상일 경우 수량만 감소
          foundItem.quantity -= 1;
        } else {
          // 수량이 1개일 경우 alert
          alert("상품 수량은 최소 1개 이상이어야 합니다. 상품을 삭제해주세요.");
        }
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      // 아이템 삭제 로직
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addItem, subtractItem, deleteItem } = cartSlice.actions;

export default cartSlice;
