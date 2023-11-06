import styled from "styled-components";
import plus from "../assets/ic_plus.png";
import minus from "../assets/ic_minus.png";
import close from "../assets/ic_close.png";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, subtractItem } from "../redux/cartSlice";
import { CartItemState } from "../redux/cartSlice";

// CartBox의 Props 타입 정의
interface CartBoxProps {
  item: CartItemState;
}

const CartBox: React.FC<CartBoxProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleSubtractItem = () => {
    dispatch(subtractItem(item));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <Wrapper>
      <ItemImage src={item.image} />
      <div>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>{item.price.toLocaleString()}</ItemPrice>

        <ItemQuantity>
          <ItemQuanBtn onClick={handleAddItem}>
            <img src={plus} alt="plus" />
          </ItemQuanBtn>
          <ItemQuanText>{item.quantity}</ItemQuanText>
          <ItemQuanBtn onClick={handleSubtractItem}>
            <img src={minus} alt="minus" />
          </ItemQuanBtn>
        </ItemQuantity>
      </div>

      <CloseBtn src={close} alt="x" onClick={handleDeleteItem} />
    </Wrapper>
  );
};

export default CartBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  margin: 10px 0;
`;

const ItemImage = styled.img`
  width: 150px;
`;

const ItemTitle = styled.div``;

const ItemPrice = styled.div`
  font-weight: 600;
  margin: 15px 0;
`;

const ItemQuantity = styled.div`
  display: flex;
  gap: 10px;
`;

const ItemQuanBtn = styled.span`
  background-color: #dbdbdb;
  border-radius: 3px;
  cursor: pointer;
  padding: 0 5px;
  img {
    width: 12px;
  }
`;

const ItemQuanText = styled.span``;

const CloseBtn = styled.img`
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
`;
