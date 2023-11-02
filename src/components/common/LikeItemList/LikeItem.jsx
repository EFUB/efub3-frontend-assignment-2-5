import styled from "styled-components";
import { flexCenter } from "../../../style/common";
import { useRecoilState } from "recoil";
import { LikeItemAtom } from "../../../atom/likeItem";
import { boxShadow } from "../../../style/common";
import { ReactComponent as DeleteIcon } from "../../../asset/deleteIcon.svg";

const LikeItem = () => {
  const [likeList, setLikeList] = useRecoilState(LikeItemAtom);

  const onDeleteItem = (isbn) => {
    const newItemList = likeList.filter((item) => {
      return item.isbn !== isbn;
    });
    setLikeList(newItemList);
  };

  if (!likeList.length) {
    return;
  }

  return (
    <S.Container>
      {likeList.map((item) => {
        const { thumbnail, title, isbn } = item;
        return (
          <S.OneItem>
            <S.Img src={thumbnail} alt="이미지 없음" />
            <S.Title>{title}</S.Title>
            <DeleteIcon
              onClick={() => {
                onDeleteItem(isbn);
              }}
              style={{
                position: "absolute",
                top: -10,
                right: -10,
              }}
            />
          </S.OneItem>
        );
      })}
    </S.Container>
  );
};

export default LikeItem;
const OneItem = styled.div`
  width: 100px;
  height: 150px;
  position: relative;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
`;
const Title = styled.div`
  width: 100px;
  height: 20px;
  font-size: 14px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 150px;
  flex-direction: column;
  display: flex;
  position: absolute;
  right: 100px;
  text-align: center;
  border: 1px solid grey;
  ${flexCenter}
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
  top: 200px;
  ${boxShadow}
`;

const S = {
  Container,
  OneItem,
  Title,
  Img,
};
