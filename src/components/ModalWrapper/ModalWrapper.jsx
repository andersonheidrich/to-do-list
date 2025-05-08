import React from "react";
import { Modal, Box } from "@mui/material";

const ModalWrapper = ({ open, onClose, children, width = 400 }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
