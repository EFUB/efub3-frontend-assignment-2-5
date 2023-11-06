import { S, Credit } from './common-style';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import folder from '../assets/folder-dynamic-color-mint.png';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Text size={'9.25vh'}>행운.zip</S.Text>
        <S.Text size={'3vh'} weight={'600'}>
          오늘 있었던 소소한 행운을 기록해 보세요!
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
              navigate('/lucky-cat');
            }}
          >
            행운 고양이 만나기
          </S.Button>
        </S.BtnContainer>
      </S.Container>
      <Image src={folder} />
      <Credit />
    </S.Wrapper>
  );
};
export default Landing;

const Image = styled.img`
  height: 50vmin;
`;
