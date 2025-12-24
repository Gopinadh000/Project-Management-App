import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { MODAL_CENTER, MODAL_SIDE } from "./modal.constants";

// Define modal sizes for Tailwind CSS
const sizeClasses = {
  sm: "w-64 min-h-[200px]",
  md: "w-96 min-h-[300px]",
  l: "w-[600px] min-h-[300px]",
  lg: "w-[800px] min-h-[400px]",
  xl: "w-[1000px] min-h-[500px]",
  xxl: "w-[1200px] min-h-[600px]",
};

// Modal style function based on modal type and size
const modalStyle = (modalType: string, size: string, isOpen: boolean) => {
  const baseClasses = "bg-white shadow-lg flex flex-col justify-between"; // Shared styles
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  if (modalType === MODAL_SIDE) {
    const slideIn = isOpen ? "translate-x-0" : "translate-x-full"; // Handle animation when opening
    return `${baseClasses} fixed top-0 right-0 h-full transition-transform duration-500  ${slideIn} ${sizeClass}`;
  }

  // Default to 'center' modal
  return `${baseClasses} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClass}`;
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalType: MODAL_CENTER | MODAL_SIDE;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "l";
  title?: string;
  footerComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const APPModal: React.FC<ModalProps> = ({
  open,
  onClose,
  modalType = MODAL_CENTER, // Default modal type is 'center'
  size = "md", // Default size is 'md'
  children,
  title,
  footerComponent,
}) => {
  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 200,
          },
        }}
      >
        <Box className={modalStyle(modalType, size, open)}>
          <Box className="flex h-12 justify-between items-center bg-gray-100 px-4    text-lg cursor-pointer">
            <Typography
              id="transition-modal-title"
              variant="inherit"
              className=""
            >
              {title}
            </Typography>
            <span
              className="rounded-sm hover:bg-white flex items-center justify-center cursor-pointer hover:text-red w-8 h-8"
              onClick={onClose}
            >
              <CloseIcon className="cursor-pointer" />
            </span>
          </Box>
          <Box className="flex-grow p-4 overflow-y-auto">{children}</Box>
          {footerComponent && (
            <Box className="h-14 bg-gray-100 p-2">{footerComponent}</Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default APPModal;
