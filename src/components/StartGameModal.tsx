import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { handleStartGame } from "../utils/InitGame";

import store from "../reducers";
import ArrowKeysImg from "../img/Arrow-Keys.svg";
import wasdKeysImg from "../img/wasd-Keys.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2C3333",
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
          <Typography
            sx={{
              color: "#CBE4DE",
            }}
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Controls
          </Typography>
          {
            <div className="grid grid-cols-2 justify-self-start">
              <div className="w-32">
                <img src={ArrowKeysImg} />
              </div>
              <div className="w-32 justify-self-end">
                <img src={wasdKeysImg} />
              </div>
            </div>
          }
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClose} variant="contained">
              Play
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
