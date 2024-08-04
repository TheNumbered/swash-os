import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Typography } from '@mui/material';
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
  backgroundColor: theme.palette.primary.main,
  padding: '8px 16px',
  color: theme.palette.primary.contrastText,
  cursor: 'move', // Change cursor to indicate drag
}));

const WindowContent = styled('iframe')({
  width: '100%',
  height: 'calc(100% - 40px)', // Subtract header height
  border: 'none',
});

const Window: React.FC<{ url: string; onClose: () => void }> = ({ url, onClose }) => {
  const [iframeError, setIframeError] = useState(false);
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <Rnd
      bounds="window"
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        
        setSize({
          // @ts-ignore
          width: ref.style.width,
          // @ts-ignore
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
          <Box>Window Title</Box>
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </WindowHeader>
        {iframeError ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
            <Typography variant="h6">Content cannot be displayed</Typography>
            <Button variant="contained" color="primary" onClick={() => window.open(url, '_blank')}>
              Open in new tab
            </Button>
          </Box>
        ) : (
          <WindowContent src={url} onError={handleIframeError} />
        )}
      </WindowContainer>
    </Rnd>
  );
};

export default Window;
