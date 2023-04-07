import { SpeedDialAction, SpeedDialIcon, SpeedDial as MUISpeedDial } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <HomeIcon />, name: 'Home', link: '/' },
  { icon: <ArticleIcon />, name: 'Document', link: '/document' },
  { icon: <Diversity1Icon />, name: 'Members', link: '/about' },
];

export default function SpeedDial() {
  const navigate = useNavigate();

  return (
    <MUISpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'absolute', bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
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
