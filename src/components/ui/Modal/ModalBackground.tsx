import React, { PropsWithChildren, SyntheticEvent, useRef } from "react";
interface Props extends PropsWithChildren {
  hideModal: (e: SyntheticEvent) => void;
}

export const ModalBackGround = ({ children, hideModal }: Props) => {
  const modalRef = useRef(null);
  const handleClick = (e: SyntheticEvent) => {
    if (e.target === modalRef.current) {
      hideModal(e);
    }
  };
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center  bg-black/40  transition-all"
      onClick={handleClick}
      ref={modalRef}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};
