import { S, Credit } from './common-style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { asyncUpFetch } from '../Redux/luckyCatSlice';
import luckyCatSlice from '../Redux/luckyCatSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const LuckyCat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.luckyCat.value);
  const status = useSelector((state) => state.luckyCat.status);
  const catImage = useSelector((state) => state.luckyCat.catImage);

  const handleChangeCat = async () => {
    await dispatch(asyncUpFetch());
    await dispatch(luckyCatSlice.actions.up(1));
  };

  useEffect(() => {
    handleChangeCat();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Text size={'6.6vh'}>행운 고양이 만나기</S.Text>
        <S.Text size={'3vh'} weight={'600'}>
          당신의 행운을 빌어줄 고양이를 만나보세요!
        </S.Text>
        <S.BtnContainer>
          <S.Button
            onClick={() => {
              navigate('/diary');
            }}
          >
            행운 기록하기
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
      <S.Container style={{ alignItems: 'center' }}>
        <S.Text size={'2.2vmin'} style={{ marginBottom: '2vmin' }}>
          지금까지 만난 고양이의 수: {count}
        </S.Text>
        <CatImage src={catImage} />
        <S.Text size={'2.2vmin'} style={{ marginTop: '2vmin' }}>
          {status}
        </S.Text>
        <S.BtnContainer margin={'1vmin'}>
          <S.Button
            onClick={() => {
              handleChangeCat();
            }}
          >
            다른 고양이도 만나보기
          </S.Button>
          <S.Button
            onClick={() => {
              dispatch(luckyCatSlice.actions.reset());
            }}
          >
            초기화하기
          </S.Button>
        </S.BtnContainer>
      </S.Container>
      <Credit />
    </S.Wrapper>
  );
};
export default LuckyCat;

const CatImage = styled.img`
  width: 50vmin;
  max-height: 70vmin;
  border: none;
  border-radius: 4vmin;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`;
