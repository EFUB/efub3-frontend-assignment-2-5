import React from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
	listState,
	bookmarkState,
	bookmarkListSelector,
	myListSelector,
} from "../store/atom";

import NavBar from "../components/NavBar";
import Item from "../components/Item";

const MyPage = () => {
	const bookmarkList = useRecoilValue(bookmarkListSelector);
	const myList = useRecoilValue(myListSelector);
	const resetBookmarkList = useResetRecoilState(bookmarkState);
	const resetMyList = useResetRecoilState(listState);
	return (
		<>
			<NavBar />
			<SectionTitle>🔖 내가 북마크한 사진</SectionTitle>
			<Button onClick={resetBookmarkList}>
				🗑️ reset (나의 북마크 모두 지우기)
			</Button>
			<Wrapper>
				{bookmarkList &&
					bookmarkList.map((item) => <Item {...item} key={item.id} />)}
			</Wrapper>
			<SectionTitle>📤 내가 업로드한 사진</SectionTitle>
			<Button onClick={resetMyList}>
				🗑️ reset (내가 업로드한 사진 모두 지우기)
			</Button>
			<Wrapper>
				{myList && myList.map((item) => <Item {...item} key={item.id} />)}
			</Wrapper>
		</>
	);
};

export default MyPage;

const SectionTitle = styled.div`
	font-size: 20px;
	font-weight: 500;
	margin: 20px 30px 0 30px;
	background-color: rosybrown;
	padding: 3px 10px;
	color: #fff;
	border-radius: 5px;
`;

const Wrapper = styled.div`
	width: calc(100% - 60px);
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

const Button = styled.button`
	margin: 10px 0 0 30px;
`;
