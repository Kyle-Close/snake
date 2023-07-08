import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { handleStartGame } from "../utils/InitGame";
import { BOARD_SIZE } from "../reducers/BoardData";
import store from "../reducers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function StartGameModal() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    handleStartGame(store.getState().GameState.difficulty);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Controls
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Up down
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
