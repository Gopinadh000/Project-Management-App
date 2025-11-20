import { styled } from "@mui/material";
import TextField from "@mui/material";
import Box from "@mui/material";
import InputBase from '@mui/material/InputBase';




export const StyledTextField = styled(InputBase)({
    '& .MuiInputBase-input': {
    borderRadius: 2,
    position: 'relative',
    backgroundColor: '#F3F6F9',

    borderColor: '#E0E3E7',
    fontSize: 16,
    width: 'full',
    padding: '6px',

    },
    '&:focus': {
      boxShadow: `0px`,
      borderColor: "green",

    },
})