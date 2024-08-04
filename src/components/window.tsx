import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const WindowContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '98%',
  height: '98%',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.paper,
  zIndex: 1300, // High z-index to ensure it's on top
  //transform: 'translate(-50%, -50%)', // Center the window
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

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
     <Draggable handle=".window-header">
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
          <WindowContent src={url}  onError={handleIframeError} />
        )}
      </WindowContainer>
    </Draggable>
  );
};

export default Window;