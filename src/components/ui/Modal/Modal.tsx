import React, { PropsWithChildren, SyntheticEvent } from "react";
import { createPortal } from "react-dom";
import { ModalBackGround } from "@components/ui/Modal/ModalBackground";

interface Props extends PropsWithChildren {
  boxModalClasses?: string;
  hideModal: (e: SyntheticEvent) => void;
  showModal: boolean;
}

export const Modal = ({ children, hideModal, showModal }: Props) => {
  const bodyElement = document.querySelector("body");
  if (!bodyElement) return null;
  const modal = (
    <ModalBackGround hideModal={hideModal}>{children}</ModalBackGround>
  );
  return <>{showModal ? createPortal(modal, bodyElement) : null}</>;
};
