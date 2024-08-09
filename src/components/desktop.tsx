import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import background from '../assets/background2.jpg';
import installationData from '../installations.json';
import { WindowAppDesc } from './window';

const DesktopContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

const FenceContainer = styled('div')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const FenceTitle = styled('h3')({
  color: 'white',
  marginBottom: '10px',
  width: '100%',
  textAlign: 'left',
});

const DesktopIcon = styled(IconButton)({
  color: 'white',
  '&:hover': {
    color: '#ffeb3b',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const IconLabel = styled('div')({
  marginTop: '5px',
  color: 'white',
  fontSize: '0.8rem',
});

const CenterClock = styled('div')({
  color: 'white',
  fontSize: '6rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const DateLabel = styled('div')({
  marginTop: '10px',
  color: 'white',
  fontSize: '1.5rem',
});

const Desktop: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [selectedApp, setSelectedApp] = useState<keyof typeof installationData | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const handleIconClick = (appName: keyof typeof installationData) => {
    setSelectedApp(appName);
  };

  const handleClose = () => {
    setSelectedApp(null);
  };

  return (
    <DesktopContainer>
      <FenceContainer>
        <FenceTitle>My Apps</FenceTitle>
        {Object.values(installationData).map((app, index) => (
          <DesktopIcon key={index} onClick={() => handleIconClick(app.name as keyof typeof installationData)}>
            <img src={app.logo} alt={app.name} style={{ width: 50, height: 50 }} />
            <IconLabel>{app.arialabel}</IconLabel>
          </DesktopIcon>
        ))}
      </FenceContainer>
      <CenterClock>
        {formattedTime}
        <DateLabel>{formattedDate}</DateLabel>
      </CenterClock>
      <FenceContainer>
        <FenceTitle>My Documents</FenceTitle>
        {/* Document icons can be added here in a similar fashion */}
      </FenceContainer>
      {selectedApp && (
        <WindowAppDesc
          name={selectedApp}
          onClose={handleClose}
        />
      )}
    </DesktopContainer>
  );
};

export default Desktop;
