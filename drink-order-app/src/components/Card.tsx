import styled from "styled-components";
import { CartItemAtom } from "../recoil/Atom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardItemProps, CartItemProps } from "../types";

// 메인 페이지의 음료 컴포넌트
const Card = (props: CardItemProps) => {
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);
  const [showCartModal, setShowCartModal] = useState(false);
  const navigate = useNavigate();

  const handleAddCart = () => {
    console.log("cartItem:", cartItem);
    console.log("id:", props.id);
    const itemExists = cartItem.find(
      (item: CardItemProps) => item.id === props.id
    );

    if (itemExists) {
      const updateQuantity = cartItem.map((item: CartItemProps) =>
        item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updateQuantity);
    } else {
      setCartItem((item: any) => [
        ...item,
        {
          id: props.id,
          name: props.name,
          price: props.price,
          img: props.img,
          quantity: 1,
        },
      ]);
    }

    setShowCartModal(true);
  };

  return (
    <>
      <Wrapper>
        <Image>
          <img src={props.img} alt="drink-img" />
        </Image>
        <DetailWrapper>
          <Detail>
            <Name>{props.name}</Name>
            <Price>{props.price}원</Price>
          </Detail>
          <AddButton onClick={handleAddCart}>+</AddButton>
        </DetailWrapper>
      </Wrapper>
      {showCartModal && (
        <Overlay>
          <CartModal>
            <Alert>장바구니에 추가되었습니다!</Alert>
            <ModalButton onClick={() => navigate("/cart")}>
              장바구니로 이동하기
            </ModalButton>
            <ModalButton
              onClick={() => {
                navigate("/");
                setShowCartModal(false);
              }}
              className="home"
            >
              계속 고르기
            </ModalButton>
          </CartModal>
        </Overlay>
      )}
    </>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  background-color: var(--blue);
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin-bottom: 8px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const Price = styled.div`
  font-size: 13px;
`;

const AddButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  border-radius: 12px;
  box-shadow: 5px 5px 7px #b8cbd4, -5px -5px 7px #f0ffff;
  background-color: var(--blue);
  color: var(--purple);
  cursor: pointer;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
`;
const CartModal = styled.div`
  background-color: var(--white);
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
`;

const Alert = styled.div`
  font-size: 18px;
  margin-bottom: 12px;
`;

const ModalButton = styled.div`
  background-color: var(--pink);
  padding: 8px 10px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: pointer;

  &.home {
    background-color: var(--purple);
  }
`;
