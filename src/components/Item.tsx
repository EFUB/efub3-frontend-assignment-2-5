import styled from "styled-components";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../store/atom";
import { ListType } from "../types";

const Item = (item: ListType) => {
	const { id, imageUrl, title, author } = item;
	const [bookmarkId, setBookmarkId] = useRecoilState(bookmarkState);
	const onBookmark = (id: number) =>
		bookmarkId.includes(id)
			? setBookmarkId((pre) => pre.filter((item) => item !== id))
			: setBookmarkId((pre) => [...pre, id]);
	return (
		<>
			{item && (
				<Block>
					<ImgRect>
						<img src={imageUrl} />
					</ImgRect>
					<Title>{title}</Title>
					<Info>
						<div>👤 {author}</div>
					</Info>
					<Icon
						onClick={() => onBookmark(id)}
						style={{
							backgroundColor: bookmarkId.includes(id) ? "rosybrown" : "gray",
						}}
					>
						🔖
					</Icon>
				</Block>
			)}
		</>
	);
};

export default Item;

const Block = styled.div`
	width: calc((100% - 20px) / 3);
	margin-bottom: 10px;
	position: relative;
`;

const ImgRect = styled.div`
	width: 100%;
	height: 150px;
	border-radius: 5px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Title = styled.div`
	font-weight: 600;
	padding: 10px 0;
`;

const Info = styled.div`
	width: calc(100% - 10px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	margin-left: 5px;
`;

const Icon = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 20px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
