import { SpeedDialAction, SpeedDialIcon, SpeedDial as MUISpeedDial } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <Diversity1Icon />, name: 'Members', link: '/about' },
  { icon: <ArticleIcon />, name: 'Document', link: '/document' },
  { icon: <HomeIcon />, name: 'Home', link: '/' },
];

export default function SpeedDial() {
  const navigate = useNavigate();

  return (
    <MUISpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'absolute', bottom: 32, right: 32 }}
      icon={<SpeedDialIcon sx={{ color: 'black' }} />}
      FabProps={{
        sx: {
          bgcolor: 'rgb(94 234 212)',
          '&:hover': {
            bgcolor: 'rgb(20 184 166)',
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => navigate(action.link)}
        />
      ))}
    </MUISpeedDial>
  );
}
