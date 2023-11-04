import { S, Credit } from '../common-style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DiaryInput from './DiaryInput';
import DiaryItem from './DiaryItem';

const Diary = () => {
  const navigate = useNavigate();
  const diaryList = useSelector((state) => state.diary.diaryList);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Text size={'6.6vh'}>행운 기록하기</S.Text>
        <S.Text size={'3vh'} weight={'600'}>
          오늘 있었던 소소한 행운을 기록해 보세요!
        </S.Text>
        <S.BtnContainer>
          <S.Button
            onClick={() => {
              navigate('/lucky-cat');
            }}
          >
            행운 고양이 만나기
          </S.Button>
          <S.Button
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로
          </S.Button>
        </S.BtnContainer>
      </S.Container>
      <DiaryContainer>
        <DiaryInput />
        {diaryList &&
          diaryList
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <DiaryItem
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  date={item.date}
                />
              );
            })}
      </DiaryContainer>
      <Credit />
    </S.Wrapper>
  );
};
export default Diary;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vmin;
  height: 70vmin;
  border: none;
  border-radius: 4vmin;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  overflow-y: scroll;
`;
