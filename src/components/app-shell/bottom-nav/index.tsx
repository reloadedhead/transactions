import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeIcon, BarIcon, CardIcon, PersonIcon } from '../../icons';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1200,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation showLabels={false} value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        value="home"
        icon={
          <HomeIcon
            height={24}
            width={24}
            fill={value === 'home' ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="inout"
        icon={
          <BarIcon
            height={24}
            width={24}
            fill={value === 'inout' ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="card"
        icon={
          <CardIcon
            height={24}
            width={24}
            fill={value === 'card' ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="profile"
        icon={
          <PersonIcon
            height={24}
            width={24}
            fill={value === 'profile' ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
    </BottomNavigation>
  );
};

export default BottomNav;
