import React, { useState } from 'react';
import { Button, createStyles, Divider, List, makeStyles, Theme } from '@material-ui/core';
import { Transaction, TransactionType } from '../../types';
import TransactionListItem from './item';
import { DropdownIcon } from '../icons';

const mockTransactions: Transaction[] = [
  {
    title: 'Dropbox Plan',
    category: 'Subscription',
    subCategory: 'dropbox',
    amount: 144.0,
    timestamp: new Date('2019-09-18'),
    type: 'expense',
  },
  {
    title: 'Spotify Subscr.',
    category: 'Subscription',
    subCategory: 'music',
    amount: 24.0,
    timestamp: new Date('2019-09-12'),
    type: 'expense',
  },
  {
    title: 'ATM Withdrawal',
    category: 'Cash Withdraw',
    subCategory: 'atm',
    amount: 32.0,
    timestamp: new Date('2019-09-10'),
    type: 'expense',
  },
  {
    title: 'KFC Restaurant',
    category: 'Food & Drink',
    amount: 14.0,
    subCategory: 'fastfood',
    timestamp: new Date('2019-09-06'),
    type: 'expense',
  },
  {
    title: 'Tax on Interest',
    category: 'Tax & Bill',
    subCategory: 'interest',
    amount: 1.0,
    timestamp: new Date('2019-09-04'),
    type: 'expense',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 8,
      marginTop: 8,
    },
    root: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    listOptions: {
      marginBottom: 8,
      marginTop: 24,
      display: 'flex',
      flexDirection: 'row',
    },
    selectButtonLabel: {
      textTransform: 'capitalize',
    },
    grow: {
      flexGrow: 1,
    },
  })
);

const Transactions = () => {
  const classes = useStyles();
  const [viewingType, setViewingType] = useState<TransactionType>('expense');

  const handleSelectViewingType = (selectedViewingType: TransactionType) => {
    setViewingType(selectedViewingType);
  };

  return (
    <div className={classes.root}>
      <div className={classes.listOptions}>
        <Button
          onClick={() => handleSelectViewingType('expense')}
          classes={{ label: classes.selectButtonLabel }}
          size="small"
          variant="text"
          color={viewingType === 'expense' ? 'primary' : 'default'}
        >
          Expenses
        </Button>
        <Button
          onClick={() => handleSelectViewingType('earning')}
          classes={{ label: classes.selectButtonLabel }}
          size="small"
          variant="text"
          color={viewingType === 'earning' ? 'primary' : 'default'}
        >
          Earnings
        </Button>
        <div className={classes.grow} />
        <Button
          classes={{ label: classes.selectButtonLabel }}
          size="small"
          variant="text"
          endIcon={<DropdownIcon height={16} width={16} fill="fff" />}
        >
          Sort By
        </Button>
      </div>
      <List className={classes.list}>
        {mockTransactions
          .filter((t) => t.type === viewingType)
          .map((t, i) => (
            <>
              <TransactionListItem transaction={t} />
              {i < mockTransactions.length - 1 && <Divider variant="middle" component="li" />}
            </>
          ))}
      </List>
    </div>
  );
};

export default Transactions;
