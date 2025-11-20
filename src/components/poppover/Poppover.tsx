import React, { useState, useRef } from 'react';
import { Box, Popover } from '@mui/material';

interface PoppoverProps {
  parentComponent: React.ReactNode;
  childComponent: React.ReactNode;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

const Poppover: React.FC<PoppoverProps> = ({
  parentComponent,
  childComponent,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  }
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box ref={anchorRef} onClick={handleClick} sx={{ cursor: 'pointer' }}>
        {parentComponent}
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        open={open}
        onClose={handleClose}
      >
        {childComponent}
      </Popover>
    </div>
  );
};

export default Poppover