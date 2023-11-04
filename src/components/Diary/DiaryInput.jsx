import { useState } from 'react';
import diarySlice from '../../Redux/diarySlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import add from '../../assets/add.svg';

const DiaryInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(diarySlice.actions.add(text));
      setText('');
    }
  };

  return (
    <Form onSubmit={addItem}>
      <InputField
        value={text}
        placeholder="오늘의 행운을 기록해 보세요"
        onChange={handleChange}
      />
      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={add} style={{ margin: '3vmin 0 1vmin 2.4vmin' }} />
      </button>
    </Form>
  );
};

export default DiaryInput;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  margin: 4vmin 0 2vmin 3vmin;
  width: 36vmin;
  height: 5vmin;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  color: #767676;
  font-size: 2.2vmin;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;
