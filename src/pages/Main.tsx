import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DiaryItemAtom } from "../DiaryItemAtom";

function Main() {
  const [value, setValue] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [weather, setWeather] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScore(parseInt(event.target.value));
  };

  const handleWeatherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWeather(event.target.value);
  };

  const [diaryItem, setDiaryItem] = useRecoilState(DiaryItemAtom);

  // 다이어리 아이템 추가 함수
  const addDiaryItem = () => {
    const newItem = {
      id: new Date().getTime(),
      text: value,
      mood: parseInt(score.toString()), // score를 문자열로 변환하고 다시 숫자로 파싱
      weather: weather,
    };
    setDiaryItem([...diaryItem, newItem]);
    setValue("");
    setScore(0);
    setWeather("");
  };

  return (
    <ListWrapper>
      <StyledTextarea
        rows={4}
        placeholder="여기에 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <StyledCheck>
        <div className="section">
          <div className="title">오늘 날씨는?</div>
          <Select name="weather" value={weather} onChange={handleWeatherChange}>
            <option value="warm">너무 더워!🌞</option>
            <option value="nice">선선하고 좋아~🌤</option>
            <option value="rain">비가 내려..🌧</option>
            <option value="thunder">천둥/번개가 치는 날씨🌧</option>
            <option value="snow">눈이 와!☃</option>
            <option value="cold">추워..☃</option>
          </Select>
        </div>
        <div className="section">
          <div className="title">오늘 하루는?</div>
          <Input
            value={score.toString()} // score를 문자열로 변환
            type="number"
            onChange={handleScoreChange}
          ></Input>
        </div>
      </StyledCheck>
      <SaveBtn onClick={addDiaryItem}>저장하기</SaveBtn>
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 8px;

  .section {
    width: 16rem;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: navy;
    font-weight: 600;
  }
`;

const StyledTextarea = styled.textarea`
  width: 50rem;
  height: 10rem;
  padding: 1rem;
  border: 1.5px solid black;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const StyledCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SaveBtn = styled.button`
  width: 7rem;
  height: 3rem;
`;

const Select = styled.select`
  font-size: 20px;
`;

const Input = styled.input`
  font-size: 20px;
`;

export default Main;
