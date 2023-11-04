import { LegacyRef } from "react";
import styled from "styled-components";

type Props = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	text: string;
	onText: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputRef: LegacyRef<HTMLInputElement>;
	preview: string | null;
};

const Upload = ({
	onSubmit,
	text,
	onText,
	onImage,
	inputRef,
	preview,
}: Props) => {
	return (
		<Form onSubmit={onSubmit}>
			제목 :
			<input
				type="text"
				placeholder="제목을 입력하세요"
				className="title-input"
				value={text}
				onChange={onText}
			/>
			<br />
			<input
				type="file"
				accept="image/jpg, image/jpeg, image/png"
				onChange={onImage}
				ref={inputRef}
				id="image"
			/>
			<div className="preview">{preview && <img src={preview} />}</div>
			<button type="submit" className="upload">
				📤 업로드
			</button>
		</Form>
	);
};

export default Upload;

const Form = styled.form`
	width: calc(100% - 90px);
	margin: 20px 0 0 30px;
	padding: 15px;
	height: 130px;
	border-radius: 10px;
	background-color: lightgray;
	position: relative;

	.title-input {
		width: 80%;
		margin: 0 0 10px 5px;
		background-color: transparent;
		padding: 4px 10px;
		border: 1px solid gray;
		border-radius: 4px;
	}

	.upload {
		font-size: 18px;
		position: absolute;
		right: 15px;
		bottom: 10px;
		background-color: #fff;
		border-radius: 25px;
		border: 0;
		padding: 5px 10px;
		cursor: pointer;
	}

	.preview {
		width: calc(100% - 30px);
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`;
