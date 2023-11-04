import styled from "styled-components";
import logo from "./assets/eight_seconds_logo.png";
import cart from "./assets/ic_cart.png";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "./redux/store";

const Header = () => {
  const navigate = useNavigate();

  // 장바구니 목록 불러오기
  const cartList = useSelector((state: RootState) => state.cart);

  const [curCartList, setCurCartList] = useState(cartList);

  // 장바구니 목록이 바뀔 때마다 갱신하기
  useEffect(() => {
    setCurCartList(cartList);
  }, [cartList]);

  return (
    <HeaderWrapper>
      <Logo
        src={logo}
        alt="로고"
        onClick={() => {
          navigate("/");
        }}
      />

      <div style={{ position: "relative" }}>
        <CartIcon
          src={cart}
          alt="장바구니"
          onClick={() => {
            navigate("/cart");
          }}
        />
        <CartQuantity>{curCartList.length}</CartQuantity>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 60px;
  }
`;

const Logo = styled.img`
  width: 13%;
`;

const CartIcon = styled.img`
  width: 44px;
  @media screen and (max-width: 600px) {
    width: 33px;
  }
`;

const CartQuantity = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e91313;
  color: white;

  font-size: 14px;
  padding: 1px 8px;
  border-radius: 10px;
`;
