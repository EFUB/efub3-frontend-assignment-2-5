import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ImgAtom } from "../recoil/ImgAtom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const EditModal = ({ setIsModal, idx }: { setIsModal: any; idx: number }) => {
  const [savedImages, setSavedImages] = useRecoilState(ImgAtom); // 이미지 저장, 삭제 atom
  const [text, setText] = useState(""); // 노트 입력값

  // 이미지 삭제
  const deleteImg = () => {
    setSavedImages((prev) => prev.filter((img) => img.id !== idx));
    setIsModal(false);
    toast("The photo has been deleted!", {
      icon: "👌",
      style: {
        borderRadius: "10px",
        background: "black",
        color: "#fff",
      },
    });
  };

  // 노트 입력값 저장
  const saveText = () => {
    if (text.length > 0) {
      setSavedImages((prev) =>
        prev.map((image) => {
          if (image.id === idx) {
            return {
              ...image,
              private_note: text,
            };
          }
          return image;
        })
      );
      setIsModal(false);
      toast("The private note has been saved!", {
        icon: "📝",
        style: {
          borderRadius: "10px",
          background: "black",
          color: "#fff",
        },
      });
    } else {
      setIsModal(false);
    }
  };
  let download_url = savedImages.filter((el) => el.id === idx)[0].download_url;
  let private_note = savedImages.filter((el) => el.id === idx)[0].private_note;

  return (
    <>
      <BG></BG>
      <Center>
        <Container>
          <Center>
            <Title>Edit the pin</Title>
          </Center>
          <NoteContainer>
            <PrivateNote>Private Note</PrivateNote>
            <Content
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={private_note}
            />
            <Img src={download_url} />
          </NoteContainer>
          <BtnCotainer>
            <DeleteBtn onClick={() => deleteImg()}>Delete</DeleteBtn>
            <CancelBtn onClick={() => setIsModal(false)}>Cancel</CancelBtn>
            <SaveBtn onClick={() => saveText()}>Save</SaveBtn>
          </BtnCotainer>
        </Container>
      </Center>
    </>
  );
};

const Img = styled.img`
  width: 14rem;
  border-radius: 20px;
`;

const BtnCotainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BG = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 10;
  opacity: 80%;
`;

const NoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  position: absolute;
  max-width: 50rem;
  z-index: 12;
  width: 80%;
  padding: 2rem;
  background-color: white;
  justify-content: center;
  border-radius: 30px;
  top: 15%;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
`;

const PrivateNote = styled.p`
  margin: 0;
  margin-right: 2%;
`;

const Content = styled.textarea`
  width: 40%;
  height: 5rem;
  border-radius: 15px;
  border: 2px solid lightgray;
  outline: none;
  padding: 1rem;
  margin-right: 3%;
`;

const DeleteBtn = styled.button`
  margin-top: 0.8rem;
  background-color: #efefef;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  padding: 1rem;
  font-size: 15px;
  cursor: pointer;
  margin-right: auto;
`;

const CancelBtn = styled(DeleteBtn)`
  margin-right: 1rem;
`;

const SaveBtn = styled(DeleteBtn)`
  background-color: #e60023;
  color: white;
  margin-right: 0;
`;
export default EditModal;
