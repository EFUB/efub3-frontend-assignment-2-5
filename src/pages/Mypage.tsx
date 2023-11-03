import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ImgAtom } from "../recoil/ImgAtom";
import Profile from "../components/Profile";
import edit from "../assets/editIcon.png";
import { useState } from "react";
import EditModal from "../components/EditModal";
import Header from "../components/common/Header";
import { Toaster } from "react-hot-toast";
import { ImgProps } from "../../CommonTypes";

const MyPage = () => {
  const savedImages = useRecoilValue(ImgAtom); // 이미지 저장, 삭제 atom
  const [hoveredIndex, setHoveredIndex] = useState(-1); // hover된 이미지 id
  const [clickedIndex, setClickedIndex] = useState(-1); // click된 이미지 id
  const [isModal, setIsModal] = useState(false); // 모달 오픈 여부

  return (
    <>
      <div>
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
      {isModal && <EditModal setIsModal={setIsModal} idx={clickedIndex} />}
      <Header />
      <Container>
        <Center>
          <Profile />
          <Columns>
            {savedImages.map((el) => (
              <Figure
                key={el.id}
                onMouseEnter={() => setHoveredIndex(el.id)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {hoveredIndex === el.id && (
                  <EditIcon
                    src={edit}
                    onClick={() => {
                      setIsModal(true);
                      setClickedIndex(el.id);
                    }}
                  />
                )}
                <Img
                  key={el.id}
                  src={el.download_url}
                  isHover={hoveredIndex === el.id ? 1 : 0}
                />
              </Figure>
            ))}
          </Columns>
        </Center>
      </Container>
    </>
  );
};

const EditIcon = styled.img`
  position: absolute;
  z-index: 2;
  width: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const Columns = styled.div`
  max-width: 1200px;
  column-width: 210px;
  column-gap: 15px;
  margin-left: 6%;
  margin-right: 6%;
`;

const Figure = styled.div`
  display: inline-block;
  margin: 0;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Center = styled.div`
  margin-top: 5.4rem;
`;

const Img = styled.img<ImgProps>`
  width: 100%;
  border-radius: 18px;
  cursor: pointer;

  transition: filter 100ms ease;

  filter: ${(props) =>
    props.isHover === 1 ? "brightness(55%)" : "brightness(100%)"};
`;

export default MyPage;
