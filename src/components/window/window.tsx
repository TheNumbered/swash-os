import MaximizeIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Remove';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const WindowContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.paper,
  zIndex: 1300, // High z-index to ensure it's on top
}));

const WindowHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: `${theme.palette.background.default}`,
  padding: '4px 16px',
  cursor: 'move', 
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px 12px 0 0',
  height: '40px', 
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: 'inherit',
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)', // Buttons grow on hover
    color: theme.palette.secondary.main, // Change color on hover
  },
}));

const IFrame = styled('iframe')({
  width: '100%',
  height: 'calc(100% - 28px)', // Subtract header height
  border: 'none',
  transition: 'height 0.3s ease', // Adjust height smoothly when header height changes
});

export const Window: React.FC<{ component: React.ReactNode; onClose: () => void }> = ({ component, onClose }) => {
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    if (isMaximized) {
      setSize({ width: 800, height: 600 });
      setPosition({ x: 100, y: 100 });
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setPosition({ x: 0, y: 0 });
    }
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    setSize({ width: 300, height: 200 });
  };

  return (
    <Rnd
      bounds="window"
      size={size}
      position={position}
      onDragStop={(e, d) => {
        setPosition({ x: Math.max(d.x, 0), y: Math.max(d.y, 0) });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({
          //@ts-ignore
          width: ref.style.width,
          //@ts-ignore
          height: ref.style.height,
        });
        setPosition(position);
      }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-header"
    >
      <WindowContainer>
        <WindowHeader className="window-header">
          <Box style={{ marginLeft: 'auto' }}>
            <IconButtonStyled onClick={handleMinimize}>
              <MinimizeIcon />
            </IconButtonStyled>
            <IconButtonStyled onClick={handleMaximize}>
              <MaximizeIcon />
            </IconButtonStyled>
            <IconButtonStyled onClick={onClose}>
              <CloseIcon />
            </IconButtonStyled>
          </Box>
        </WindowHeader>
        {component}
      </WindowContainer>
    </Rnd>
  );
};

export const WindowIframe: React.FC<{ url: string; onClose: () => void }> = ({ url, onClose }) => {
  return (
    <Window component={<IFrame src={url} />} onClose={onClose} />
  );
};
