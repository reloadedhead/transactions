import { makeStyles, Theme, createStyles, CssBaseline } from '@material-ui/core';
import React from 'react';
import BottomNav from './bottom-nav';
import Header from './header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    toolbar: theme.mixins.toolbar,
    sidebarLayout: {
      flexGrow: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(11),
      },
    },
    noSidebarLayout: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const AppShell = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>Hello World!</div>
      </main>
      <BottomNav />
    </div>
  );
};

export default AppShell;
