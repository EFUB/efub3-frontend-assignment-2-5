import S from "./style";
import { useRecoilState } from "recoil";
import { LikeItemAtom } from "../../../atom/likeItem";

const OneBook = ({ book }) => {
  console.log(book);
  const { contents, price, title, thumbnail, isbn } = book;
  const [LikeItem, setLikeItem] = useRecoilState(LikeItemAtom);

  const onAddLikeItem = () => {
    if (!LikeItem.includes(book)) {
      setLikeItem((prev) => [...prev, book]);
    }
  };

  const onDeleteItem = (isbn) => {
    const newItemList = LikeItem.filter((item) => {
      return item.isbn !== isbn;
    });
    setLikeItem(newItemList);
  };

  const isInLikeItemList = LikeItem.includes(book);
  return (
    <S.Wrapper>
      <S.Container>
        <S.BookImg src={thumbnail} />
        <S.ContentBox>
          <S.Title>{title}</S.Title>
          <S.DetailBox>{contents}</S.DetailBox>
          <S.Price>{price}</S.Price>
        </S.ContentBox>
        {!isInLikeItemList ? (
          <S.Button
            isInList={true}
            onClick={() => {
              onAddLikeItem();
            }}
          >
            찜하기
          </S.Button>
        ) : (
          <S.Button
            isInList={false}
            onClick={() => {
              onDeleteItem(isbn);
            }}
          >
            찜삭제
          </S.Button>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
export default OneBook;
