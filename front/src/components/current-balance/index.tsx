import React from 'react';
import {
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core';
import clsx from 'clsx';
import { AddIcon, UpArrow } from '../icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: theme.palette.common.white,
    },
    balance: {
      fontWeight: 'bold',
    },
    container: {
      paddingTop: 40,
      paddingBottom: 20,
      paddingLeft: 28,
      paddingRight: 28,
      backgroundColor: theme.palette.primary.main,
      width: '100%',
    },
    textContainer: {
      paddingTop: 5,
      paddingBottom: 5,
      flexGrow: 1,
    },
    addButton: {
      alignItems: 'flex-end',
      display: 'flex',
      paddingBottom: 5,
    },
    addButtonRoot: {
      backgroundColor: '#ffffff21',
      borderRadius: 8,
    },
    addButtonLabel: {
      color: theme.palette.common.white,
      borderRadius: 8,
    },
    balanceContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 10,
    },
    iconContainer: {
      width: 28,
      height: 28,
      background: '#ffffff14',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    referenceContainer: {
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  })
);

const CurrentBalance = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.balanceContainer}>
        <div className={classes.textContainer}>
          <Typography variant="subtitle2" className={classes.text}>
            Active Total Balance
          </Typography>
          <Typography variant="h4" className={clsx(classes.text, classes.balance)}>
            $8,420.000
          </Typography>
        </div>
        <div className={classes.addButton}>
          <IconButton size="small" classes={{ root: classes.addButtonRoot, label: classes.addButtonLabel }}>
            <AddIcon width={32} height={32} fill={theme.palette.common.white} />
          </IconButton>
        </div>
      </div>
      <Divider light />
      <div className={classes.referenceContainer}>
        <div className={classes.iconContainer}>
          <UpArrow height={22} width={22} fill={theme.palette.common.white} />
        </div>
        <Typography variant="subtitle2" className={classes.text}>
          Up by 4% from last month
        </Typography>
      </div>
    </div>
  );
};

export default CurrentBalance;
