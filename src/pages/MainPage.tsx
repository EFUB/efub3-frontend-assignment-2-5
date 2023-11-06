import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ImgAtom } from "../recoil/ImgAtom";
import { Toaster, toast } from "react-hot-toast";
import Header from "../components/common/Header";
import { ImageInfo, ImgProps, Save } from "../../CommonTypes";

const MainPage = () => {
  const [data, setData] = useState<ImageInfo[]>([]); // 이미지 데이터
  const [hoveredIndex, setHoveredIndex] = useState(-1); // hover된 이미지 id
  // recoil
  const [savedImages, setSavedImages] = useRecoilState(ImgAtom); // 이미지 id & url 저장, 삭제 atom

  // 무료 이미지 api
  const getPhotos = async () => {
    try {
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100​​"
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  // 이미지 추가 / 삭제
  const handleSaveClick = (imgInfo: ImageInfo) => {
    // 이미 클릭된 이미지인지 확인
    const imageIndex = savedImages.findIndex(
      (image) => image.id === imgInfo.id
    );

    if (imageIndex !== -1) {
      // 이미 클릭된 이미지인 경우, 제거
      setSavedImages((prev) => prev.filter((image) => image.id !== imgInfo.id));
    } else {
      const updatedImageInfo = { ...imgInfo, private_note: "" };
      // 클릭되지 않은 경우, 추가
      setSavedImages((prev) => [...prev, updatedImageInfo]);
      toast("The photo has been saved!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "black",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
      <Header />
      <Container>
        <Columns>
          {data &&
            data.map((el) => (
              <Figure
                key={el.id}
                onMouseEnter={() => setHoveredIndex(el.id)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {hoveredIndex === el.id && (
                  <SaveBtn
                    save={
                      savedImages.some((image) => image.id === el.id) ? 1 : 0
                    }
                    onClick={() => {
                      handleSaveClick(el);
                    }}
                  >
                    {savedImages.some((image) => image.id === el.id)
                      ? "Saved"
                      : "Save"}
                  </SaveBtn>
                )}
                <Img
                  key={el.id}
                  src={el.download_url}
                  isHover={hoveredIndex === el.id ? 1 : 0}
                />
                <AuthorContainer>
                  <Profile>{el.author.slice(0, 1)}</Profile>
                  <Author>{el.author}</Author>
                </AuthorContainer>
              </Figure>
            ))}
        </Columns>
      </Container>
    </>
  );
};

const SaveBtn = styled.button<Save>`
  position: absolute;
  z-index: 2;
  margin-left: 1rem;
  margin-top: 0.8rem;
  background-color: ${(props) => (props.save === 1 ? "black" : "#e60023")};
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  padding: 1rem;
  font-size: 15px;
  cursor: pointer;
`;

const Profile = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: #efefef;
  border-radius: 100%;
  border: none;
  margin-right: 0.4rem;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
`;

const Author = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Columns = styled.div`
  max-width: 1200px;
  column-width: 210px;
  column-gap: 15px;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 5.2rem;
`;

const Figure = styled.div`
  display: inline-block;
  margin: 0;
  margin-bottom: 30px;
`;

const Img = styled.img<ImgProps>`
  width: 100%;
  border-radius: 18px;
  cursor: pointer;
  transition: filter 100ms ease;

  filter: ${(props) =>
    props.isHover === 1 ? "brightness(55%)" : "brightness(100%)"};
`;

export default MainPage;
