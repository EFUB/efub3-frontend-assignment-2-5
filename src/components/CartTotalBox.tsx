import styled from "styled-components";
import { CartItemState } from "../redux/cartSlice";

// CartTotalBox의 Props 타입 정의
interface CartTotalBoxProps {
  curCartList: CartItemState[];
}

const CartTotalBox: React.FC<CartTotalBoxProps> = ({ curCartList }) => {
  // quantity와 price를 곱한 것의 합을 구하는 함수 - 초기값을 정해주지 않으면 배열의 첫 번째 요소가 초기값이 됨
  const totalPrice = curCartList.reduce((acc, currentItem) => {
    // 현재 아이템의 quantity와 price를 추출
    const { quantity, price } = currentItem;

    // 현재 아이템의 합을 계산하여 누적 합계에 더함
    return acc + (quantity || 0) * price; // quantity 속성이 선택적이므로 존재 여부를 확인
  }, 0);

  return (
    <Wrapper>
      <TotalDiv>
        <span>
          총 <strong>{curCartList.length}</strong>건
        </span>
        <span>
          <strong>{totalPrice.toLocaleString()}</strong>원
        </span>
      </TotalDiv>
      <OrderBtn>구매하기</OrderBtn>
    </Wrapper>
  );
};

export default CartTotalBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const OrderBtn = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  width: 100%;
  height: 60px;

  background-color: black;
  color: white;
  border: 0;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
