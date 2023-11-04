import styled from "styled-components";
import DiaryItem from "../component/DiaryItem/DiaryItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DiaryItemAtom, CountSelector, MoodSelector } from "../DiaryItemAtom";

function DiaryList() {
  const diaryItems = useRecoilValue(DiaryItemAtom);
  const totalMood = useRecoilValue(MoodSelector);
  const averageMood =
    totalMood > 0 ? Math.floor(totalMood / diaryItems.length) : 0;
  const diaryCount = useRecoilValue(CountSelector);
  const setDiaryItems = useSetRecoilState(DiaryItemAtom);

  const deleteDiaryItem = (id: number) => {
    const updatedDiaryItems = diaryItems.filter((item) => item.id !== id);
    setDiaryItems(updatedDiaryItems);
  };

  return (
    <div>
      <Heading>내 일기</Heading>
      <ItemWrapper>
        {diaryItems.length ? (
          diaryItems.map((diary) => (
            <div key={diary.id}>
              <Section>
                <DiaryItem data={diary} />
                <Btn onClick={() => deleteDiaryItem(diary.id)}>삭제</Btn>
              </Section>
            </div>
          ))
        ) : (
          <NoItems>일기를 작성해 주세요!</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>이번 달 일기 갯수</span>
          <Heading>{diaryCount}개</Heading>
          <span>이번 달 내 평균 기분 점수</span>
          <Heading>{averageMood}점</Heading>
        </ColumnWrapper>
      </TotalPriceWrapper>
    </div>
  );
}

export default DiaryList;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
  margin-bottom: 1rem;
`;
const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
  padding: 10px;
`;

const TotalPriceWrapper = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  & span {
    text-align: center;
  }
`;

const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;
const Btn = styled.button`
  width: 5rem;
  height: 1.8rem;
  margin-right: 1rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
