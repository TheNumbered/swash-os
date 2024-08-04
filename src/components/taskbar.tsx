import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const DockContainer = styled(Paper)<{ expanded: boolean }>(({ theme, expanded }) => ({
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  backgroundColor: theme.palette.background.default + '90',
  borderRadius: '20px',
  padding: expanded ? '10px 40px' : '10px 20px', // Adjust padding based on expanded state
  alignItems: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  transition: 'padding 0.3s, transform 0.3s',
  transform: 'translateX(-50%)'
}));

const DockItem = styled(IconButton)({
  margin: '0 10px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.5)',
  },
});

const iconMap = [
  { icon: <HomeIcon fontSize="large" />, label: 'Home' },
  { icon: <SearchIcon fontSize="large" />, label: 'Search' },
  { icon: <FolderIcon fontSize="large" />, label: 'Folder' },
  { icon: <SettingsIcon fontSize="large" />, label: 'Settings' },
];

const DockTaskbar: React.FC = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <DockContainer
      theme={theme}
      expanded={expanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconMap.map((item, index) => (
        <DockItem key={index} color="inherit" aria-label={item.label}>
          {item.icon}
        </DockItem>
      ))}
    </DockContainer>
  );
};

export default DockTaskbar;
