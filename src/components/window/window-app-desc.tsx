import { Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import appData from '../../installations.json';
import { Window } from './window';

const AppDescContainer = styled(Box)(({ theme }) => ({
  padding: '20px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const AppHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  width: '100%',
});

const AppLogo = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '10px',
  objectFit: 'contain',
  marginRight: '20px',
});

const AppDetails = styled(Box)({
  flex: 1,
});

const TechStackContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '20px',
  marginBottom: '20px',
});

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '5px',
  padding: '5px 10px',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

const AppUrl = styled('a')(({ theme }) => ({
  marginTop: '20px',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

interface WindowAppDescProps {
  name: keyof typeof appData;
  onClose: () => void;
}

export const WindowAppDesc: React.FC<WindowAppDescProps> = ({ name, onClose }) => {
  const app = appData[name];

  return (
    <Window onClose={onClose} component={
      <AppDescContainer>
        <AppHeader>
          <AppLogo src={app.logo} alt={app.name} />
          <AppDetails>
            <Typography variant="h5" component="h2" gutterBottom>
              {app.arialabel}
            </Typography>
            <Typography variant="body1" paragraph>
              {app.description}
            </Typography>
          </AppDetails>
        </AppHeader>
        <Typography variant="h6" component="h3">
          Tech Stack:
        </Typography>
        <TechStackContainer>
          {app.techstack.map((tech, index) => (
            <StyledChip key={index} label={tech} />
          ))}
        </TechStackContainer>
        <AppUrl href={app.url} target="_blank" rel="noopener noreferrer">
          Visit {app.name}
        </AppUrl>
      </AppDescContainer>
    } />
  );
};
