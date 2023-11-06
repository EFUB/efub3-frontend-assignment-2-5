import moment from "moment";
import { useRecoilValue } from "recoil";
import { scheduleState, selectedDateState } from "../recoil/Atom";
import ScheduleDetail from "./ScheduleDetail";
import styled from "styled-components";

import { ScheduleProps } from "../props";

const JoinSchedule = () => {
  const schedules = useRecoilValue(scheduleState);

  const date = useRecoilValue(selectedDateState);
  // 날짜 포맷팅
  const formattedDate = moment(date).format("YYYY-MM-DD");

  return (
    <Div>
      <DateDiv>{moment(date).format("YYYY년 MM월 DD일")}</DateDiv>
      {schedules.map((schedule: ScheduleProps) => {
        const formattedScheduleDate = moment(schedule.date).format(
          "YYYY-MM-DD"
        );
        // 선택한 날짜와 저장된 일정의 날짜가 일치하면 보여주기
        if (formattedDate === formattedScheduleDate) {
          return (
            <ScheduleDetail
              key={schedule.id}
              id={schedule.id}
              date={schedule.date}
              schedule={schedule.schedule}
            />
          );
        }
        return null;
      })}
    </Div>
  );
};

const Div = styled.div`
  width: 300px;
`;
const DateDiv = styled.div`
  border: 1px solid gainsboro;
  padding: 15px;
`;

export default JoinSchedule;
