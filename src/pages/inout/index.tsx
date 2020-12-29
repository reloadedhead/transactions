import React from 'react';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import CurrentBalance from '../../components/current-balance';
import Transactions from '../../components/transactions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    status: {
      backgroundColor: theme.palette.primary.main,
    },
    text: {
      color: theme.palette.common.white,
    },
  })
);

const InOut = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <CurrentBalance />
      </Grid>
      <Grid item xs={12}>
        <Transactions />
      </Grid>
    </Grid>
  );
};

export default InOut;
