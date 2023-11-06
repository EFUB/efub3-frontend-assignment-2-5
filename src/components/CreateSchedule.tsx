import { useState } from "react";
import { scheduleState, selectedDateState } from "../recoil/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import JoinSchedule from "./JoinSchedule";
import styled from "styled-components";

const CreateSchedule = () => {
  const date = useRecoilValue(selectedDateState);
  const [schedule, setSchedule] = useRecoilState(scheduleState);
  const [text, setText] = useState("");

  const addSchedule = (newSchedule: Object) => {
    const updatedSchedule = [...schedule, newSchedule];
    setSchedule(updatedSchedule);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      const id = Math.floor(Math.random() * 100000);
      const newSchedule = {
        id: id,
        date: date,
        schedule: text,
      };
      addSchedule(newSchedule);
      setText("");
    }
  };

  return (
    <>
      <Title>일정 등록하기</Title>
      <Form onSubmit={handleSubmit}>
        <Input onChange={(e) => setText(e.target.value)} value={text}></Input>
        <SubmitBtn type="submit">등록하기</SubmitBtn>
      </Form>
      <div>
        <JoinSchedule />
      </div>
    </>
  );
};

const Title = styled.p`
  margin: 50px 0;
  padding: 0;
  font-size: 30px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 280px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: gainsboro;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  color: black;
  margin-bottom: 20px;
  cursor: pointer;
`;

export default CreateSchedule;
