import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { listState } from "../store/atom";
import { ListType } from "../types";

import NavBar from "../components/NavBar";
import Upload from "../components/Upload";
import Item from "../components/Item";

const GalleryPage = () => {
	const [list, setList] = useRecoilState<ListType[]>(listState);

	const inputRef = useRef<HTMLInputElement>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const onImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!inputRef.current) return;
		if (inputRef.current.files) {
			const reader = new FileReader();
			reader.readAsDataURL(inputRef.current.files[0]);
			reader.onloadend = () => {
				typeof reader.result === "string" && setPreview(reader.result);
			};
		}
	};
	const [text, setText] = useState("");
	const onText = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (preview && text) {
			setList([
				...list,
				{
					id: list.length + 1,
					title: text,
					imageUrl: preview,
					author: "USER_ME",
				},
			]);
		} else alert("제목과 이미지를 입력해주세요.");
		setPreview(null);
		setText("");
	};

	return (
		<>
			<NavBar />
			<Upload
				onSubmit={onSubmit}
				text={text}
				onText={onText}
				onImage={onImage}
				inputRef={inputRef}
				preview={preview}
			/>
			<Wrapper>
				{list.map((item) => (
					<Item {...item} key={item.id} />
				))}
			</Wrapper>
		</>
	);
};

export default GalleryPage;

const Wrapper = styled.div`
	width: calc(100% - 60px);
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;
