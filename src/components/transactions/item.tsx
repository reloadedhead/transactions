import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import { Transaction, TransactionType } from '../../types';
import { CardIcon } from '../icons';
import { format } from 'date-fns';
import clsx from 'clsx';
import TransactionIcon from './icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemIconRoot: {
      width: 38,
      height: 38,
      minWidth: 0,
      backgroundColor: '#E6E8EF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      marginRight: 14,
    },
    listSecondaryItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    expense: {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
    },
    earning: {
      color: theme.palette.success.main,
      fontWeight: 'bold',
    },
  })
);

const TransactionAmount = ({ type, amount }: { type: TransactionType; amount: number }) => {
  const classes = useStyles();
  return (
    <Typography
      className={clsx({
        [classes.expense]: type === 'expense',
        [classes.earning]: type === 'earning',
      })}
    >
      {type === 'expense' && '-'}
      {`$${amount.toFixed(2)}`}
    </Typography>
  );
};

const TransactionListItem = ({ transaction }: { transaction: Transaction }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ListItem>
      <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
        <TransactionIcon
          width={24}
          height={24}
          fill={theme.palette.primary.main}
          type={transaction.subCategory}
        />
      </ListItemIcon>
      <ListItemText primary={transaction.title} secondary={transaction.category} />
      <div className={classes.listSecondaryItem}>
        <TransactionAmount {...transaction} />
        <Typography variant="body2" color="textSecondary">
          {format(transaction.timestamp, 'dd MMM yyyy')}
        </Typography>
      </div>
    </ListItem>
  );
};

export default TransactionListItem;
