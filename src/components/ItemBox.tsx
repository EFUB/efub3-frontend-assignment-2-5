import styled from "styled-components";
import heart from "../assets/ic_heart.png";
import heart_full from "../assets/ic_heart_red.png";
import cart from "../assets/ic_cart.png";
import { useDispatch } from "react-redux";
import { likeItem, unLikeItem } from "../redux/likeSlice";
import { addItem } from "../redux/cartSlice";
import { ItemListType } from "../item/ItemList";
import { LikeItemState } from "../redux/likeSlice";

// ItemBox의 Props 타입 정의
interface ItemBoxProps {
  item: ItemListType;
  curLikeList: LikeItemState[];
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, curLikeList }) => {
  const dispatch = useDispatch();

  const handleLikeItem = () => {
    dispatch(likeItem(item));
  };
  const handleUnLikeItem = () => {
    dispatch(unLikeItem(item.id));
  };

  const handleAddCartItem = () => {
    // 장바구니에 아이템 추가
    dispatch(addItem(item));
    alert(`장바구니에 ${item.title} 상품을 추가했습니다!`);
  };

  // 좋아요 목록에서 해당 아이템이 있는지 확인
  const isLiked = curLikeList.some(
    (likeListItem) => likeListItem.id === item.id
  );

  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <ItemImage src={item.image} />
        <CartBtn onClick={handleAddCartItem}>
          <CartIcon src={cart} alt="cart" />
        </CartBtn>
      </div>
      <ItemInfo>
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item.price.toLocaleString()}</ItemPrice>
        </div>
        {isLiked ? (
          <img
            src={heart_full}
            style={{ width: "30px" }}
            onClick={handleUnLikeItem}
          />
        ) : (
          <img src={heart} style={{ width: "30px" }} onClick={handleLikeItem} />
        )}
      </ItemInfo>
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const CartBtn = styled.button`
  border-radius: 3px;
  padding: 5px;
  border: 0;
  filter: drop-shadow(2px 3px 3px gray);

  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const CartIcon = styled.img`
  width: 30px;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

const ItemTitle = styled.div`
  margin: 10px 0;
`;

const ItemPrice = styled.div`
  font-weight: 600;
`;
