import diarySlice from '../../Redux/diarySlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { S } from '../common-style';
import { BsTrashFill } from 'react-icons/bs';
import { DiaryState } from '../../Redux/type';

interface Props extends DiaryState {
  key: number;
}

const DiaryItem = (props: Props) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    console.log('delete');
    dispatch(diarySlice.actions.delete(props.id));
  };
  return (
    <DiaryContent key={props.id}>
      <ColumnContainer>
        <S.Text size={'1.8vmin'} weight={'400'} style={{ color: '#D8D8D8' }}>
          {props.date}
        </S.Text>
        <S.Text
          size={'2.2vmin'}
          weight={'500'}
          style={{ width: '36vmin', height: 'auto', whiteSpace: 'pre-line' }}
        >
          {props.content}
        </S.Text>
      </ColumnContainer>
      <FlexContainer style={{ gap: '2vmin' }}>
        <BsTrashFill
          size="4vmin"
          color="d8d8d8"
          style={{ cursor: 'pointer' }}
          onClick={deleteItem}
        />
      </FlexContainer>
    </DiaryContent>
  );
};

export default DiaryItem;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2vmin 3vmin;
`;
