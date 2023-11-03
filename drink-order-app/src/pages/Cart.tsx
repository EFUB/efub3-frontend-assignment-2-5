import styled from "styled-components";
import Layout from "../layout/Layout";
import { CartItemAtom } from "../recoil/Atom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import CartItem from "../components/CartItem";
import { TotalPriceSelector } from "../recoil/Selector";
import { useNavigate } from "react-router-dom";
import { CardItemProps } from "../types";

interface CartItemProps extends CardItemProps {
  quantity: number;
}

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);
  const totalPrice = useRecoilValue(TotalPriceSelector);
  const resetItem = useResetRecoilState(CartItemAtom);
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <HomeButton onClick={() => navigate("/")}>
          <i className="fas fa-arrow-left"></i>
        </HomeButton>
        15000원 이상 무료 배송!
      </Header>

      <DrinkWrapper>
        {cartItem.length ? (
          <>
            {cartItem.map((e: CartItemProps) => (
              <CartItem
                id={e.id}
                name={e.name}
                price={e.price}
                img={e.img}
                quantity={e.quantity}
              />
            ))}
            <TotalWrapper>
              <FreeShipping>
                {totalPrice >= 15000 ? (
                  <div>무료 배송 가능!</div>
                ) : (
                  <div>배송비 2000원</div>
                )}
              </FreeShipping>
              <OrderWrapper>
                <OrderButton>
                  {totalPrice.toLocaleString()}원 주문하기
                </OrderButton>
                <ResetButton onClick={() => resetItem()}>
                  <i className="fas fa-redo"></i>
                </ResetButton>
              </OrderWrapper>
            </TotalWrapper>
          </>
        ) : (
          <Empty>담은 상품이 없습니다</Empty>
        )}
      </DrinkWrapper>
    </Layout>
  );
};

export default Cart;

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  background-color: var(--pink);
  margin-bottom: 5px;
  position: relative;
`;
const HomeButton = styled.div`
  font-size: 23px;
  color: var(--blue);
  position: absolute;
  left: 20px;
  cursor: pointer;
`;
const DrinkWrapper = styled.div``;

const Empty = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FreeShipping = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 10px 0;
`;

const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderButton = styled.div`
  width: 300px;
  font-weight: 600;
  font-size: 18px;
  padding: 12px 0;
  border-radius: 8px;
  text-align: center;
  margin-right: 8px;
  background-color: var(--blue);
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;

const ResetButton = styled.div`
  color: var(--pink);
  background-color: var(--blue);
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 23px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;
