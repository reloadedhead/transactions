import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeIcon, BarIcon, CardIcon, PersonIcon } from '../../icons';
import { useHistory, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const history = useHistory();
  const theme = useTheme();

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  const isCurrentPage = (page: string) => page === location.pathname;

  return (
    <BottomNavigation
      showLabels={false}
      value={location.pathname}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        value="/home"
        icon={
          <HomeIcon
            height={24}
            width={24}
            fill={isCurrentPage('/home') ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="/inout"
        icon={
          <BarIcon
            height={24}
            width={24}
            fill={isCurrentPage('/inout') ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="/card"
        icon={
          <CardIcon
            height={24}
            width={24}
            fill={isCurrentPage('/card') ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
      <BottomNavigationAction
        value="/profile"
        icon={
          <PersonIcon
            height={24}
            width={24}
            fill={isCurrentPage('/profile') ? theme.palette.primary.main : theme.palette.grey[500]}
          />
        }
      />
    </BottomNavigation>
  );
};

export default BottomNav;
