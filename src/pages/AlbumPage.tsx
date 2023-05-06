import React, { SyntheticEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Album } from "@backendTypes";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { HeaderWithPreviousArrow } from "@components/ui/HeaderWithPreviousArrow";
import { useModal } from "@hooks/useModal";
import { Modal } from "@components/ui/Modal/Modal";
import { SliderContent } from "@components/Slider/SliderContent";
import { ImgContainer } from "@components/ImgContainer";

interface ActiveImage {
  id: string;
  url: string;
}

export const AlbumPage = () => {
  const data = useLoaderData() as Album;
  const { showModal, hideModal, displayModal } = useModal();
  const [activeImg, setActiveImg] = useState<ActiveImage>(data.images[0]);

  const findActiveImageIndex = (id: string) => {
    return data.images.findIndex((el) => id === el.id);
  };

  const handleImgClick = (e: SyntheticEvent, id: string) => {
    const newActiveImg = data.images[findActiveImageIndex(id)];
    setActiveImg(newActiveImg);
    displayModal(e);
  };

  const changeActiveImg = (no: number) => {
    const { length } = data.images;
    const activeImgId = findActiveImageIndex(activeImg.id);
    let newIndex: number = activeImgId + no;
    if (newIndex < 0) newIndex = length - 1;
    if (length - 1 < newIndex) newIndex = 0;
    setActiveImg(data.images[newIndex]);
  };

  const emptyAlbum = (
    <h2 className="mt-4 p-4 text-3xl">
      Upps... Wygląda na to że album
      <span className="font-bold uppercase text-error">
        {" "}
        &quot;{data.title}&quot;
      </span>{" "}
      nie ma jeszcze{" "}
      <span className="font-bold uppercase text-error">żadnych</span> zdjęć.
    </h2>
  );

  return (
    <>
      <WhiteBoard className="flex min-h-[80vh] flex-col items-center pb-8">
        <HeaderWithPreviousArrow title={`Przeglądasz album: "${data.title}"`} />
        {data.images.length === 0 ? (
          emptyAlbum
        ) : (
          <ImgContainer images={data.images} onClick={handleImgClick} />
        )}
      </WhiteBoard>
      <Modal hideModal={hideModal} showModal={showModal}>
        <SliderContent imgUrl={activeImg.url} onClick={changeActiveImg} />
      </Modal>
    </>
  );
};
