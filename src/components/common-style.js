import styled from 'styled-components';
import github from '../assets/Github.svg';

const S = {};
S.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(158, 255, 191, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  gap: 20vmin;
`;
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

S.Text = styled.div`
  color: #111;
  font-size: ${(props) => props.size || '100px'};
  font-weight: ${(props) => props.weight || '700'};
  margin-bottom: 1vmin;
`;

S.BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.margin || '4vmin'};
  gap: 2vmin;
`;

S.Button = styled.button`
  width: 23vmin;
  height: 7vmin;
  border: none;
  border-radius: 2vmin;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  color: #111;
  font-size: 2.2vmin;
  font-weight: 600;
`;

S.CreditContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 2vmin;
  right: 3vmin;
`;

S.Icon = styled.img`
  width: 2vmin;
  margin: 0 1vmin 1vmin 0;
`;

export { S };

export const Credit = () => {
  return (
    <S.CreditContainer>
      <S.Icon src={github} />
      <S.Text
        size={'2.2vmin'}
        weight={'600'}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://github.com/hanby-choi');
        }}
      >
        hanby-choi
      </S.Text>
    </S.CreditContainer>
  );
};
