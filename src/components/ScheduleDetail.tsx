import { useRecoilState } from "recoil";
import { scheduleState } from "../recoil/Atom";

import styled from "styled-components";
import { useState } from "react";

import { ScheduleProps } from "../props";

const ScheduleDetail = ({ id, schedule }: ScheduleProps) => {
  const [schedules, setSchedules] = useRecoilState(scheduleState);

  // 일정 수정을 위한 state
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState(schedule);

  const handleSubmit = () => {
    // 선택한 id와 맞는 일정일 경우 editedSchedule로 수정
    const updateSchedules = schedules.map((item: ScheduleProps) =>
      item.id === id ? { ...item, schedule: editedSchedule } : item
    );
    // 상태 업데이트
    setSchedules(updateSchedules);
    // 수정 완료
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 선택한 id와 맞지 않는 일정만 필터링하여 새로운 배열 생성
    const updatedSchedules = schedules.filter(
      (item: ScheduleProps) => item.id !== id
    );
    // 새로운 배열을 scheduleState에 설정하여 해당 일정 삭제
    setSchedules(updatedSchedules);
  };

  return (
    <Div>
      {isEditing ? (
        // 수정 중
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setEditedSchedule(e.target.value)}
            value={editedSchedule}
          ></Input>
          <Btn type="submit">등록하기</Btn>
        </Form>
      ) : (
        // 수정이 아닐 때
        <>
          <Text>{schedule}</Text>
          <BtnDiv>
            <Btn onClick={() => setIsEditing(true)}>수정하기</Btn>
            <Btn onClick={handleDelete}>삭제하기</Btn>
          </BtnDiv>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  margin: 25px 0;
  padding: 20px 0;
  border: 1px solid gainsboro;
  width: 300px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  margin: auto;
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 10px;
  word-wrap: break-word;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;
const Btn = styled.button`
  text-decoration: none;
  padding: 3px 10px;
  background-color: gainsboro;
  color: black;
  border: none;
  border-radius: 7px;
  margin-top: 10px;
  cursor: pointer;
  margin: auto;
`;

export default ScheduleDetail;
