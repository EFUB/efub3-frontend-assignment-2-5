import { useEffect, useState } from "react";
import Calendar, { Detail } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { selectedDateState } from "../recoil/Atom";
import styled from "styled-components";
import moment from "moment";
import uniqueDatesSelector from "../recoil/Selector";

const CustomCalendar = () => {
  // 캘린더 날짜 선택 state
  const [value, onChange] = useState(new Date());

  const handleDate = useSetRecoilState(selectedDateState);
  // 날짜를 변경하면 recoil 상태 업데이트
  useEffect(() => {
    handleDate(value);
  }, [value, handleDate]);

  const uniqueDatesArray = useRecoilValue(uniqueDatesSelector);
  return (
    <>
      <StyledCalendar
        onChange={onChange}
        value={value as Date}
        formatDay={(locale: string, date: Date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        navigationLabel={undefined}
        calendarType="US"
        tileContent={({ date, view }: { date: Date; view: Detail }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html: JSX.Element[] = [];
          // 현재 날짜가 uniqueDatesArray에 있다면 html 추가
          if (
            uniqueDatesArray.find(
              (x: string) => x === moment(date).format("YYYY-MM-DD")
            )
          ) {
            // key 추가
            const key = moment(date).format("YYYY-MM-DD");
            html.push(<div key={key} className="dot"></div>);
          }

          return <div>{html}</div>;
        }}
      />
    </>
  );
};

const StyledCalendar = styled(Calendar)`
  margin-top: 50px;

  // 일 커스텀
  .react-calendar__tile {
    padding: 5px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid gainsboro;

    abbr {
      padding: 5px 6px;
      color: black;
    }
  }

  // 주말 숫자 색 설정
  .react-calendar__month-view__days__day--weekend abbr {
    color: #bdbdbd;
  }

  // 주말 요일 색 설정
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #bdbdbd;
  }

  // 선택 날짜 커스텀
  .react-calendar__tile--active {
    color: white;
    background: white;
    abbr {
      font-weight: 600;
      background: black;
      color: white;
      border-radius: 50%;
    }
  }

  // 선택 날짜 hover, focus 커스텀
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: white;
    color: white;
  }

  // 오늘 커스텀
  .react-calendar__tile--now {
    background: white;
    color: black;
    abbr {
      background: red;
      color: white;
      border-radius: 50%;
    }
  }

  // 오늘 hover, focus 커스텀
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: black;
    background: white;
  }

  // hover, focus 커스텀
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: white;
  }

  // 년/월 커스텀
  .react-calendar__navigation__label > span {
    font-weight: 700;
    //font-size: 20px;
    color: red;
  }

  // 년/월 변경 버튼 커스텀
  .react-calendar__navigation button {
    color: red;
  }

  // 년/월 버튼 커스텀
  .react-calendar__navigation button:disabled {
    background-color: white;
  }

  // 년/월 버튼 커스텀
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: white;
  }

  // 캘린더 전체 크기 설정
  .react-calendar {
    width: 450px;
  }

  // 요일 밑줄 없애기
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  // 해당 날짜에 일정이 등록되어 있는 경우
  .dot {
    height: 8px;
    width: 8px;
    background-color: #bdbdbd;
    border-radius: 50%;
    display: flex;
    margin: auto;
    margin-top: 5px;
  }
`;

export default CustomCalendar;
