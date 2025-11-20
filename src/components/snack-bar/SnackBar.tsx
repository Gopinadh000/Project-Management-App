import { Snackbar } from "@mui/material";
import { useState, useEffect , FC} from "react";

interface SnackBarPropTypes {
  message: string;
  autoHideDuration?: number;
}

const SnackBar : FC<SnackBarPropTypes>  = ({ message, autoHideDuration = 1500  }: any) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message={message}
        key="top-right"
        autoHideDuration={autoHideDuration}
      />
    </>
  );
};

export default SnackBar;
