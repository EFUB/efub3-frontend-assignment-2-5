import React from "react";
import styled from "styled-components";

const DiaryItem = ({ data }: { data: DiaryType }) => {
  return (
    <Wrapper>
      <div>
        <ColumnWrapper>
          <Title> {data.text} </Title>
          <span> {data.mood} </span>
          <span>날씨 : {data.weather}</span>
        </ColumnWrapper>
      </div>
    </Wrapper>
  );
};

export default DiaryItem;

const Wrapper = styled.li`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
`;
const ImageWrapper = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  margin-right: 16px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;
