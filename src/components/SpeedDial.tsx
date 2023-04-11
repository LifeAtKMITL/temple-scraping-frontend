import { SpeedDialAction, SpeedDialIcon, SpeedDial as MUISpeedDial } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useNavigate } from 'react-router-dom';
import { FaReact, FaPython } from 'react-icons/fa';

const actions = [
  { icon: <Diversity1Icon />, name: 'Members', link: '/about' },
  { icon: <ArticleIcon />, name: 'Document', link: '/document' },
  { icon: <HomeIcon />, name: 'Home', link: '/' },
];

const links = [
  {
    icon: <FaPython fontSize='1.8rem' />,
    name: 'Backend',
    url: '/https://github.com/LifeAtKMITL/temple-scraping-backend',
  },
  {
    icon: <FaReact fontSize='1.8rem' />,
    name: 'Frontend',
    url: 'https://github.com/LifeAtKMITL/temple-scraping-frontend',
  },
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
      {links.map((link) => (
        <SpeedDialAction
          key={link.name}
          icon={link.icon}
          tooltipTitle={link.name}
          onClick={() => window.open(link.url, '_blank')}
        />
      ))}
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
