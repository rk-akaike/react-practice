import Image from "next/image";
import React, { FC } from "react";

import close from "@/public/modalclose.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  restrictClose?: boolean;
}
const Modal: FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  restrictClose = false,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-[2px] z-50
       ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="relative shadow-lg bg-bg-primary-light flex flex-col rounded-xl min-h-[260px] min-w-[400px]">
        {!restrictClose && (
          <div className="absolute top-3 right-3 p-2 flex justify-center items-center w-11 h-11 rounded-lg z-50">
            <Image
              className="cursor-pointer"
              src={close}
              alt="close icon"
              height={24}
              width={24}
              onClick={onClose}
            ></Image>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
