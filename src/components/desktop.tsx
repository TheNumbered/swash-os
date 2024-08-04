import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import background from '../assets/background2.jpg';

const DesktopContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap', // Allow wrapping of icons
  alignItems: 'flex-start',
  padding: '20px',
  boxSizing: 'border-box',
});

const DesktopIcon = styled(IconButton)({
  color: 'white',
  '&:hover': {
    color: '#ffeb3b',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px', // Space between icons
  marginRight: '20px', // Space between icons horizontally
});

const IconLabel = styled('div')({
  marginTop: '5px',
  color: 'white',
  fontSize: '0.8rem', // Adjust font size
});

const icons = [
  { icon: <FolderIcon fontSize="large" />, label: 'Folder' },
  { icon: <ImageIcon fontSize="large" />, label: 'Images' },
  { icon: <MusicNoteIcon fontSize="large" />, label: 'Music' },
  { icon: <CodeIcon fontSize="large" />, label: 'Code' },
  { icon: <VideoLibraryIcon fontSize="large" />, label: 'Videos' },
  // Add more icons as needed
];

const Desktop: React.FC = () => {
  return (
    <DesktopContainer>
      {icons.map((item, index) => (
        <DesktopIcon key={index}>
          {item.icon}
          <IconLabel>{item.label}</IconLabel>
        </DesktopIcon>
      ))}
    </DesktopContainer>
  );
};

export default Desktop;
