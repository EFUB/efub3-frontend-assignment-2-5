import styled from "styled-components";
import cart from "../assets/ic_cart.png";

const EmptyCartBox = () => {
  return (
    <Wrapper>
      <img src={cart} alt="cart" />
      <div>장바구니에 담긴 상품이 없습니다.</div>
    </Wrapper>
  );
};

export default EmptyCartBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    filter: opacity(0.3) drop-shadow(0 0 0 white);
  }
`;
