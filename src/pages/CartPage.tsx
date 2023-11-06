import styled from "styled-components";
import CartBox from "../components/CartBox";
import CartTotalBox from "../components/CartTotalBox";
import EmptyCartBox from "../components/EmptyCartBox";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CartPage = () => {
  // 장바구니 목록 불러오기
  const cartList = useSelector((state: RootState) => state.cart);

  const [curCartList, setCurCartList] = useState(cartList);

  // 장바구니 목록이 바뀔 때마다 갱신하기
  useEffect(() => {
    setCurCartList(cartList);
  }, [cartList]);

  return (
    <div>
      <MainText>장바구니</MainText>
      {/* 장바구니 목록에 상품이 한 개라도 있을 경우에만 CartBox 표시 */}
      {curCartList.length > 0 ? (
        <>
          {curCartList.map((item) => (
            <CartBox key={item.id} item={item} />
          ))}
          <CartTotalBox curCartList={curCartList} />
        </>
      ) : (
        <EmptyCartBox />
      )}
    </div>
  );
};

export default CartPage;

const MainText = styled.div`
  text-align: center;

  font-size: 30px;
  font-weight: 600;

  margin-bottom: 30px;
`;
